import "./App.css";
import NavBar from "./components/NavBar";
import Column from "./components/Column";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar></NavBar>
      <Stack height={90} padding={2} direction="row" spacing={2}>
        <Column></Column>
        <Column></Column>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
