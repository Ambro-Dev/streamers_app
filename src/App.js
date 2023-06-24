import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import InputDropdown from "./components/InputDropdown";
import Navbar from "./components/Navbar";

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
        <Card>
          <h3>Submit streamer</h3>
          <Input title="Name" />
          <Input title="Description" />
          <InputDropdown options={options} title="Platform" />
        </Card>
        <footer>Ambro-Dev</footer>
      </div>
    </>
  );
}

export default App;
