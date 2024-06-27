import { useState } from "react";
import "./App.css";
import { Greetings, GreetingsHoC } from "./components/Greetings";
import { LabTwo } from "./containers/LabTwo";
import { LabOne } from "./containers/LabOne";

// COMPONENT FUNCTION NAME -> INITIALISE
const App = () => {
  const [contentName, setContentName] = useState("");
  // STATES & VARIABLES
  const contentDictionary = {
    labOne: "Lab 1",
    labTwo: "Lab 2",
  };

  // FUNCTIONS
  const displayHandler = () => {
    switch (contentName) {
      case contentDictionary.labOne:
        return <LabOne />;
      case contentDictionary.labTwo:
        return <LabTwo />;
      default:
        return <div>Click on a Lab button to see the content</div>;
    }
  };

  //RETURN
  return (
    <div className="main-app-container">
      <p>
        This is the welcome page that will display the buttons for each lab{" "}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5px",
        }}
      >
        <button onClick={() => setContentName(contentDictionary.labOne)}>
          Lab 1
        </button>
        <button onClick={() => setContentName(contentDictionary.labTwo)}>
          Lab 2
        </button>
      </div>

      <div
        style={{
          display: "flex",
          width: "90vw",
          height: "70vh",
          border: "red 1px solid",
          overflow: "scroll",
        }}
      >
        {displayHandler()}
      </div>
    </div>
  );
};

export default App;
