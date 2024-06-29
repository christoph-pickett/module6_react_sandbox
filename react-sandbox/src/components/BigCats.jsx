import { useState } from "react";
import { SingleCat } from "./SingleCats";

export const BigCats = () => {
  const originalData = [
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Tiger", latinName: "Panthera tigris" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
  ];
  const filter = { value: "" };
  const [catsData, setCatsData] = useState(originalData);

  const sortingCats = (type) => {
    // CLONE THE ORIGINAL STATE BECUASE WE DONT WANT TO MUTATE THE ORIGINAL STATE
    const sortedCats = [...catsData];
    // DO OUR ARRAY METHOD ON THAT CLONE

    if (type === "asc") {
      sortedCats.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    if (type === "desc") {
      sortedCats.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    // SHIP IT TO THE STATE
    setCatsData(sortedCats);
  };

  const filterCatData = (value) => {
    console.log(value);
    if (value === "") return setCatsData(originalData);

    let filteredCats = [...catsData];
    let filteredResult = filteredCats.filter((cat) => {
      return cat.latinName.toLowerCase().includes(value.toLowerCase());
    });
    console.log(filteredResult, "filteredResult");
    setCatsData(filteredResult);
  };

  const catListHandler = () => {
    return catsData.map((cat) => {
      return <SingleCat catData={cat} />;
    });
  };

  const resetData = () => {
    setCatsData(originalData);
  };

  return (
    <div className="big-cats-container">
      <DropdownList
        listData={[
          { label: "no sort", action: () => resetData() },
          { label: "asc", action: () => sortingCats("asc") },
          { label: "desc", action: () => sortingCats("desc") },
        ]}
      />
      <div>
        <input
          type="text"
          placeholder="filter by"
          onChange={(e) => {
            filter.value = e.target.value;
          }}
        />
        <button onClick={() => filterCatData(filter.value)}>filter</button>
      </div>
      <button onClick={resetData}>Reset</button>
      <ul>{catListHandler()}</ul>
    </div>
  );
};

const DropdownList = ({
  listData = [{ label: "option", action: () => console.log("action fired") }],
}) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    const labelsAction = listData.find(
      (item) => item.label === e.target.value
    )?.action;

    labelsAction();
  };

  return (
    <div>
      <select value={value} onChange={onChangeHandler}>
        {listData?.map((item) => {
          return <option value={item.label}>{item.label}</option>;
        })}
      </select>
    </div>
  );
};
