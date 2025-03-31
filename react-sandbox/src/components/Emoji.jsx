import { useState } from "react";

export const Emoji = () => {
  // state / var
  const [feeling, setFeeling] = useState("happy"); // ["happy", "sad"
  const happy = "(˵ ͡° ͜ʖ ͡°˵)";
  const sad = "(╥﹏╥)";

  // function
  const changeFeeling = () => {
    if (feeling === "happy") {
      setFeeling("sad");
      return;
    }

    setFeeling("happy");
  };

  const displayHandler = () => {
    if (feeling === "happy") {
      return happy;
    }

    if (feeling === "sad") {
      return sad;
    }
  };

  // return
  return (
    <>
      <div>{displayHandler()}</div>
      <button onClick={changeFeeling}>Change Mood</button>
    </>
  );
};

export const ThrowTable = () => {
  const [feeling, setFeeling] = useState("happy");

  const feelingHappy = <p>ʕっ•ᴥ•ʔっ</p>;
  const feelingSad = <p>ʕノ•ᴥ•ʔノ ︵ ┻━┻</p>;

  const displayHandler = () => {
    if (feeling === "happy") {
      return feelingHappy;
    }

    return feelingSad;
  };
  return (
    <div>
      {displayHandler()}
      <button
        onClick={() =>
          setFeeling((prev) => (prev === "not happy" ? "happy" : "not happy"))
        }
      >
        Change Mood
      </button>
    </div>
  );
};
