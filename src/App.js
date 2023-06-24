import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import InputDropdown from "./components/InputDropdown";
import Navbar from "./components/Navbar";
import TextTyping from "./components/TextTyping";

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
          <TextTyping text="Submit new streamer" speed={100} />
          <Card className="right" title="Submit streamer">
            <Input title="Name" />
            <Input textarea rows={3} title="Description" />
            <InputDropdown options={options} title="Platform" />
          </Card>
        </div>

        <footer>Ambro-Dev</footer>
      </div>
    </>
  );
}

export default App;
