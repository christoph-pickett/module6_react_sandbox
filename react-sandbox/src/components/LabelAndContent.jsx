export const LabelAndContent = ({ labelText, children }) => {
  const labelStyle = {
    textAlign: "left",
  };

  const labQuestionContainerStyle = {
    backgroundColor: "lightgrey",
    color: "black",
    padding: "5px",
  };

  return (
    <>
      <h6 style={labelStyle}>{labelText}</h6>
      <div style={labQuestionContainerStyle}>{children}</div>
    </>
  );
};
