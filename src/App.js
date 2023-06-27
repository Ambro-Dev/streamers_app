import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import InputDropdown from "./components/InputDropdown";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TextTyping from "./components/TextTyping";

//Data
import data from "./test-data/data";

function App() {
  const options = [
    { id: 1, value: "Twitch" },
    { id: 2, value: "YouTube" },
    { id: 3, value: "Facebook" },
  ];

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="top">
          <TextTyping
            texts={["Submit new streamer", "Select streamer from the list"]}
            speed={200}
          />
          <Card title="Submit streamer">
            <Input title="Name" />
            <Input textarea rows={3} title="Description" />
            <InputDropdown options={options} title="Platform" />
            <Button>Submit</Button>
          </Card>
        </div>
        <Card>
          <Table data={data} />
        </Card>

        <footer>Ambro-Dev</footer>
      </div>
    </>
  );
}

export default App;
