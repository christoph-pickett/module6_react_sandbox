const BigCats = () => {
  //var or state
  const cats = [
    { name: "Cheetah", latinName: "Acinonyx jubatus" },
    { name: "Cougar", latinName: "Puma concolor" },
    { name: "Jaguar", latinName: "Panthera onca" },
    { name: "Leopard", latinName: "Panthera pardus" },
    { name: "Lion", latinName: "Panthera leo" },
    { name: "Snow leopard", latinName: "Panthera uncia" },
    { name: "Tiger", latinName: "Panthera tigris" },
  ];

  const catListHandler = () => {
    return cats.map((cat) => <SingleCat catData={cat} />);
  };

  return <ul>{catListHandler()}</ul>;
};

const SingleCat = ({ catData }) => {
  return (
    <>
      <li>
        <div>
          <h2>{catData.name}</h2>
          <p>{catData.latinName}</p>
        </div>
      </li>
    </>
  );
};

export { BigCats, SingleCat };
