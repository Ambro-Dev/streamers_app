import PropTypes from "prop-types";
import React from "react";
import "./table.css";

import arrow_up from "../../assets/icons/arrow-up.svg";
import arrow_down from "../../assets/icons/arrow-down.svg";

import up_vote from "../../assets/icons/up_vote.svg";
import down_vote from "../../assets/icons/down_vote.svg";

const Table = ({ data }) => {
  const [sort, setSort] = React.useState("name_asc");

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-item">Streamer</div>
        <div className="table-header-item">Platform</div>
        <div className="table-header-item">
          <span>Votes</span>
          {sort.includes("votes") && (
            <img
              className="filter-arrow"
              height={30}
              width={30}
              src={sort === "votes_up" ? arrow_up : arrow_down}
              alt="filter-arrow"
            />
          )}
        </div>
      </div>
      <div className="table-body">
        {data.length > 0 &&
          data.map((item) => (
            <div className="table-body-row" key={item.id}>
              <div className="table-body-item">
                <div className="img-box">
                  <img
                    className="image"
                    src={item.img}
                    height={100}
                    width={100}
                    alt="adin-ross"
                  />
                  <span>{item.name}</span>
                </div>
              </div>
              <div className="table-body-item">{item.platform}</div>
              <div className="table-body-item">
                <div className="votes-up-box">
                  <img src={up_vote} alt="up-vote" height={30} width={30} />
                  <span>{item.votes_up}%</span>
                </div>
                <div className="votes-down-box">
                  <img src={down_vote} alt="down-vote" height={30} width={30} />
                  <span>{item.votes_down}%</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      platform: PropTypes.string.isRequired,
      votes_down: PropTypes.number.isRequired,
      votes_up: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

export default Table;
