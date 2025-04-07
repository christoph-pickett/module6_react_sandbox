import Labs from "./containers/Labs";
import { Container } from "@mui/material";

function App() {
  // VARIABLES/STATE

  // FUNCTIONS/SIDE EFFECT

  // RETURN OF OUR VISUAL STUFF
  return (
    <Container
      sx={{
        display: "flex",
        width: "100vw",
        height: "90vh",
        backgroundColor: "lightgrey",
      }}
    >
      <Labs />
    </Container>
  );
}

export default App;
