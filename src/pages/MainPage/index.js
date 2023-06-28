import "./main-page.css";

//Components
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import InputDropdown from "../../components/InputDropdown";
import Table from "../../components/Table";
import TextTyping from "../../components/TextTyping";

//Data
import data from "../../test-data/data";

//Platforms
import youtube from "../../assets/platforms/youtube.png";
import twitch from "../../assets/platforms/twitch.png";
import kick from "../../assets/platforms/kick.png";
import rumble from "../../assets/platforms/rumble.png";
import trovo from "../../assets/platforms/trovo.png";
import PageLayout from "../../components/PageLayout";

function MainPage() {
  const options = [
    { id: 1, value: "Twitch", image: twitch },
    { id: 2, value: "YouTube", image: youtube },
    { id: 3, value: "Kickstarter", image: kick },
    { id: 4, value: "Rumble", image: rumble },
    { id: 5, value: "Trovo", image: trovo },
  ];

  return (
    <PageLayout>
      <div className="App">
        <div className="top">
          <TextTyping
            texts={["Submit new streamer", "Select streamer from the list"]}
            speed={200}
          />
          <Card title="Submit streamer">
            <Input title="Name" />
            <InputDropdown options={options} title="Platform" />
            <Input textarea rows={3} title="Description" />
            <Button disabled>Submit</Button>
          </Card>
        </div>
        <Card>
          <Table data={data} />
        </Card>
      </div>
    </PageLayout>
  );
}

export default MainPage;
