import { Box, Paper, Typography, ButtonGroup, Button } from "@mui/material";

const Labs = () => {
  return (
    <Box width={"inherit"} height={"inherit"}>
      <Box>
        <Typography variant={"h3"}>LABS FOR MODULE 6</Typography>
      </Box>

      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Lab 1</Button>
        <Button>Lab 2</Button>
        <Button>Lab 3</Button>
      </ButtonGroup>

      <Box height={"400px"}>
        <Paper sx={{ height: "inherit" }}>
          <Typography>For now this is it</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Labs;
