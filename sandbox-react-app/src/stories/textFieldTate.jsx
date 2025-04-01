const TextFieldTate = ({
  backgroundColor = "rgba(252, 252, 249, 0.9)",
  padding = "10px",
  size = "medium",
  border = "3px solid black",
  borderRadius = "5px",
}) => {
  const sizeStyles = {
    small: "12px",
    medium: "16px",
    large: "20px",
  };
  return (
    <input
      type="text"
      style={{
        backgroundColor,
        padding,
        fontSize: sizeStyles[size],
        border,
        borderRadius,
      }}
    ></input>
  );
};

export default TextFieldTate;
