import PropTypes from "prop-types";
import React from "react";
import "./table.css";

//Icons
import arrow_up from "../../assets/icons/arrow-up.svg";
import arrow_down from "../../assets/icons/arrow-down.svg";
import up_vote from "../../assets/icons/up_vote.svg";
import down_vote from "../../assets/icons/down_vote.svg";
import filter from "../../assets/icons/filter.svg";

//platforms images
import youtube from "../../assets/platforms/youtube.png";
import twitch from "../../assets/platforms/twitch.png";
import kick from "../../assets/platforms/kick.png";
import rumble from "../../assets/platforms/rumble.png";
import trovo from "../../assets/platforms/trovo.png";

const Table = ({ data }) => {
  const [sort, setSort] = React.useState("name_asc");
  const [filteredData, setFilteredData] = React.useState(data);
  const [selectedPage, setSelectedPage] = React.useState(1);

  const changeFilter = (filter) => {
    setSelectedPage(1);
    if (filter === "name") {
      if (!sort.includes(filter)) {
        const sortedData = data.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setSort(`${filter}_asc`);
        setFilteredData(sortedData);
      } else if (sort.includes(`${filter}_asc`)) {
        const sortedData = data.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return 1;
          }
          if (fa > fb) {
            return -1;
          }
          return 0;
        });
        setSort(`${filter}_desc`);
        setFilteredData(sortedData);
      } else {
        const sortedData = data.sort((a, b) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        setSort(`${filter}_asc`);
        setFilteredData(sortedData);
      }
    } else {
      if (!sort.includes(filter)) {
        const sortedData = data.sort((a, b) => b.votes_up - a.votes_up);
        setSort(`${filter}_asc`);
        setFilteredData(sortedData);
      } else if (sort.includes(`${filter}_asc`)) {
        const sortedData = data.sort((a, b) => b.votes_down - a.votes_down);
        setSort(`${filter}_desc`);
        setFilteredData(sortedData);
      } else {
        const sortedData = data.sort((a, b) => b.votes_up - a.votes_up);
        setSort(`${filter}_asc`);
        setFilteredData(sortedData);
      }
    }
  };

  function setImage(platform) {
    const platformName = platform.toLowerCase();

    switch (platformName) {
      case "youtube":
        return youtube;
      case "twitch":
        return twitch;
      case "kickstarter":
        return kick;
      case "rumble":
        return rumble;
      case "trovo":
        return trovo;
      default:
        return youtube;
    }
  }

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(search);
    });
    setFilteredData(filteredData);
  };

  const renderPagination = () => {
    const pages = Math.ceil(filteredData.length / 10);
    function selectedStyle(number) {
      return {
        backgroundColor: selectedPage === number ? "#0ef6cc" : undefined,
        color: selectedPage === number ? "#000" : undefined,
      };
    }
    if (selectedPage > 3 && pages > 5 && selectedPage < pages - 2) {
      return (
        <>
          <div className="pagination-item" onClick={() => setSelectedPage(1)}>
            1
          </div>
          <div className="pagination-item-dots">...</div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(selectedPage - 1)}
          >
            {selectedPage - 1}
          </div>
          <div className="pagination-item" style={selectedStyle(selectedPage)}>
            {selectedPage}
          </div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(selectedPage + 1)}
          >
            {selectedPage + 1}
          </div>
          <div className="pagination-item-dots">...</div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(pages)}
          >
            {pages}
          </div>
        </>
      );
    } else if (selectedPage > 3 && pages > 5 && selectedPage >= pages - 2) {
      return (
        <>
          <div className="pagination-item" onClick={() => setSelectedPage(1)}>
            1
          </div>
          <div className="pagination-item-dots">...</div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(pages - 3)}
          >
            {pages - 3}
          </div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(pages - 2)}
            style={selectedStyle(pages - 2)}
          >
            {pages - 2}
          </div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(pages - 1)}
            style={selectedStyle(pages - 1)}
          >
            {pages - 1}
          </div>
          <div
            className="pagination-item"
            onClick={() => setSelectedPage(pages)}
            style={selectedStyle(pages)}
          >
            {pages}
          </div>
        </>
      );
    }

    const pagination = [];
    for (let i = 0; i < pages && i < 4; i++) {
      pagination.push(
        <div
          className="pagination-item"
          key={i}
          onClick={() => setSelectedPage(i + 1)}
          style={selectedStyle(i + 1)}
        >
          {i + 1}
        </div>
      );
    }
    if (pages > 5) {
      pagination.push(
        <>
          <div className="pagination-item" key="dots">
            ...
          </div>
          <div
            className="pagination-item"
            key={pages}
            onClick={() => setSelectedPage(pages)}
          >
            {pages}
          </div>
        </>
      );
    }
    return pagination;
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="table">
        <div className="table-header">
          <div
            className="table-header-item"
            onClick={() => changeFilter("name")}
          >
            <span>Name</span>
            {sort.includes("name") && (
              <img
                className="filter-arrow"
                height={30}
                width={30}
                src={sort === "name_asc" ? arrow_up : arrow_down}
                alt="filter-arrow"
              />
            )}
          </div>
          <div className="table-header-item">
            <span>Platform</span>
            <img
              className="filter-arrow"
              height={30}
              width={30}
              src={filter}
              alt="filter-arrow"
            />
          </div>
          <div
            className="table-header-item"
            onClick={() => changeFilter("votes")}
          >
            <span>Votes</span>
            {sort.includes("votes") && (
              <img
                className="filter-arrow"
                height={30}
                width={30}
                src={sort === "votes_asc" ? arrow_up : arrow_down}
                alt="filter-arrow"
              />
            )}
          </div>
        </div>
        <div className="table-body">
          {filteredData.length > 0 &&
            filteredData
              .filter(
                (item, index) =>
                  index >= (selectedPage - 1) * 10 && index < selectedPage * 10
              )
              .map((item) => (
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
                  <div className="table-body-item">
                    <img
                      src={setImage(item.platform)}
                      alt={`${item.platform}-img`}
                      height={25}
                      width={25}
                    />
                  </div>
                  <div className="table-body-item">
                    <div className="votes-up-box">
                      <img src={up_vote} alt="up-vote" height={30} width={30} />
                      <span>{item.votes_up}%</span>
                    </div>
                    <div className="votes-down-box">
                      <img
                        src={down_vote}
                        alt="down-vote"
                        height={30}
                        width={30}
                      />
                      <span>{item.votes_down}%</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {filteredData.length > 10 && (
          <div className="pagination">{renderPagination()}</div>
        )}
      </div>
    </>
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
