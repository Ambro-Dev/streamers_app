import Card from "../Card";
import Input from "../Input";
import InputDropdown from "../InputDropdown";
import Button from "../Button";
import { axiosHandler } from "../../api/axios";
import React from "react";
import PropTypes from "prop-types";
import "./notification.css";

const AddStreamerCard = ({ reload, setReload }) => {
  const [notification, setNotification] = React.useState();
  const [options, setOptions] = React.useState([]);
  const [name, setName] = React.useState("");
  const [platform, setPlatform] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (name && platform && description) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, platform, description]);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await axiosHandler.get("/platforms", { signal });
        setOptions(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const handleSubmit = async () => {
    const data = {
      name,
      platform,
      description,
    };
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      await axiosHandler
        .post("/streamers/add", data, { signal })
        .then((res) => {
          setNotification({
            message: "Streamer created successfully",
            type: "Success",
          });
        });
    } catch (error) {
      setNotification({
        message: error.message || "Something went wrong",
        type: "Error",
      });
    }
    setReload(!reload);
    setName("");
    setPlatform("");
    setDescription("");

    return () => {
      controller.abort();
    };
  };

  const handleClose = () => {
    setNotification(null);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }, [notification]);

  const renderNotification = (
    <div className="notification">
      <div
        className="notification-top"
        style={{
          borderBottom:
            notification?.type === "Error" ? "1px solid #c20202" : undefined,
        }}
      >
        <h3
          style={{
            color: notification?.type === "Error" ? "#c20202" : undefined,
          }}
        >
          {notification?.type}
        </h3>
        <button
          className="close"
          onClick={() => handleClose()}
          style={{
            color: notification?.type === "Error" ? "#c20202" : undefined,
          }}
        >
          &times;
        </button>
      </div>
      <div className="notification-content">
        <p
          style={{
            color: notification?.type === "Error" ? "#c20202" : undefined,
          }}
        >
          {notification?.message}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Card
        style={{ display: "flex", flexDirection: "column" }}
        title="Submit streamer"
      >
        <Input title="Name" value={name} setValue={setName} />
        <InputDropdown
          options={options}
          value={platform}
          title="Platform"
          setValue={setPlatform}
        />
        <Input
          textarea
          rows={3}
          title="Description"
          value={description}
          setValue={setDescription}
        />
        <Button disabled={disabled} onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Card>
      <>{notification && renderNotification}</>
    </>
  );
};

AddStreamerCard.propTypes = {
  reload: PropTypes.bool,
  setReload: PropTypes.func,
};

export default AddStreamerCard;
