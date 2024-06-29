export const SingleCat = ({ catData }) => {
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
