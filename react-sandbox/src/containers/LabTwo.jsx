import { BigCats, SingleCat } from "../components/BigCats";
import { LabelAndContent } from "../components/LabelAndContent";

export const LabTwo = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <LabelAndContent labelText={"Lab 2a - Big Cats"}>
          <BigCats />
        </LabelAndContent>
      </div>

      <div>
        <LabelAndContent labelText={"Lab 2b - Single Cat"}>
          <SingleCat
            catData={{ name: "Cheetah", latinName: "Acinonyx jubatus" }}
          />
        </LabelAndContent>
      </div>
    </div>
  );
};
