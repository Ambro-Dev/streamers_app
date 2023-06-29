//styles
import "./main-page.css";

//Components
import Card from "../../components/Card";
import Table from "../../components/Table";
import TextTyping from "../../components/TextTyping";

import PageLayout from "../../components/PageLayout";
import AddStreamerCard from "../../components/AddStreamerCard";

function MainPage() {
  return (
    <PageLayout>
      <div className="App">
        <div className="top">
          <TextTyping
            texts={["Submit new streamer", "Select streamer from the list"]}
            speed={200}
          />
          <AddStreamerCard />
        </div>
        <Card>
          <Table />
        </Card>
      </div>
    </PageLayout>
  );
}

export default MainPage;
