import Card from "../Card";
import Input from "../Input";
import InputDropdown from "../InputDropdown";
import Button from "../Button";
import { axiosHandler } from "../../api/axios";
import React from "react";

const AddStreamerCard = () => {
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
      await axiosHandler.post("/streamers/add", data, { signal });
    } catch (error) {
      console.log(error.message);
    }
    setName("");
    setPlatform("");
    setDescription("");

    return () => {
      controller.abort();
    };
  };

  return (
    <Card title="Submit streamer">
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
  );
};

export default AddStreamerCard;
