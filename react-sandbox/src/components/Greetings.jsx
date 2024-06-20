export const Greetings = ({ name }) => {
  // STATE AND VAR
  var welcomeString = `${name ? name : "Hello"} World`;

  // FUNCTIONS

  // RETURN
  return (
    <div>
      <h1>{welcomeString}</h1>
    </div>
  );
};

export const GreetingsHoC = ({ name, children }) => {
  // STATE AND VAR
  var welcomeString = `${name},`;

  // FUNCTIONS

  // RETURN
  return (
    <div>
      <h1>{welcomeString}</h1>
      {children}
    </div>
  );
};
