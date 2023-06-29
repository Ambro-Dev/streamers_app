import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import PropTypes from "prop-types";
import Card from "../../components/Card";

// Icons
import back from "../../assets/icons/back.svg";
import quote from "../../assets/icons/quote.svg";
import add from "../../assets/icons/add.svg";
import remove from "../../assets/icons/remove.svg";

//Styles
import "./streamer-page.css";

// Data
import data from "../../test-data/data";

const StreamerPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const streamerId = Number(params.id);
  const streamer = data.find((streamer) => streamer.id === streamerId);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="streamer-page">
      <PageLayout>
        <Card>
          <div className="streamer-page-top">
            <img
              src={back}
              height={50}
              width={50}
              alt="go back"
              onClick={() => navigate(-1)}
            />
            <h1>{streamer.name}</h1>
          </div>
          <div className="streamer-page-content-top">
            <div className="streamer-page-content">
              <div className="streamer-page-content-left">
                <div className="streamer-page-content-description">
                  <img
                    src={quote}
                    height={20}
                    alt="start"
                    className="quote-start"
                  />
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur aliquet sapien at varius euismod. Nam quis diam id
                    leo maximus dictum. Integer rutrum finibus ex sit amet
                    pretium. Maecenas leo ligula, volutpat sit amet feugiat eu,
                    bibendum sit amet erat. Nam maximus malesuada accumsan. Sed
                    pretium massa eget nunc condimentum, in convallis felis
                    euismod. Integer facilisis ligula justo, eleifend viverra
                    nisi iaculis ac. Nam eu imperdiet dui. Nulla facilisi. Nam
                    pretium diam nec interdum eleifend. Sed nec tristique felis,
                    nec iaculis enim. Nunc id eros nec neque faucibus auctor.
                    Maecenas eu felis non ipsum eleifend condimentum vel varius
                    metus. Proin gravida urna quam, quis tempus urna varius eu.
                    Sed ac viverra urna.
                  </span>
                  <img
                    src={quote}
                    height={20}
                    alt="end"
                    className="quote-start"
                  />
                </div>
              </div>
              <div className="streamer-page-content-right">
                <img src={streamer.img} alt="streamer-img" />
                <div className="streamer-page-voting">
                  <button className="voting-button-plus">
                    <img src={add} alt="vote-add" />
                  </button>
                  <button className="voting-button-minus">
                    <img src={remove} alt="vote-remove" />
                  </button>
                </div>
              </div>
            </div>
            <div className="all-votes-box">
              <span>All votes: 450</span>
              <div className="all-votes-box-results">
                <div className="all-votes-box-percentage">
                  <div className="all-votes-box-percentage-up">
                    <span>Votes up:</span>
                    <span className="result-up">{streamer.votes_up}%</span>
                  </div>
                  <div className="all-votes-box-percentage-down">
                    <span>Votes down:</span>
                    <span className="result-down">{streamer.votes_down}%</span>
                  </div>
                </div>
                <div className="all-votes-box-bar">
                  <div
                    className="all-votes-box-bar-up"
                    style={{ width: `${streamer.votes_up}%` }}
                  />
                  <div
                    className="all-votes-box-bar-down"
                    style={{ width: `${streamer.votes_down}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </PageLayout>
    </div>
  );
};

StreamerPage.propTypes = {
  children: PropTypes.node,
};

export default StreamerPage;
