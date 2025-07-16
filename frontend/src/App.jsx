import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import KanbanBoard from "./pages/KanbanBoard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <KanbanBoard></KanbanBoard>
    </ThemeProvider>
  );
}

export default App;
