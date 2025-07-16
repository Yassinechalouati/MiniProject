import "./App.css";
import NavBar from "./components/NavBar";
import Column from "./components/Column";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar></NavBar>
      <Stack padding={2} direction="row" spacing={2} alignItems="flex-start">
        <Column></Column>
        <Column></Column>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
