import { Greetings, GreetingsHoC } from "../components/Greetings";
import { LabelAndContent } from "../components/LabelAndContent";

export const LabOne = () => {
  return (
    <div style={{ margin: "5px", width: "100%" }}>
      <LabelAndContent labelText={"Lab 1a & b"}>
        <Greetings name={"Christoph"} />
      </LabelAndContent>

      <LabelAndContent labelText={"Lab 1c"}>
        <GreetingsHoC name={"Christoph"}>
          <p>I want to welcome you to my website, blah blah</p>
        </GreetingsHoC>
      </LabelAndContent>
    </div>
  );
};
