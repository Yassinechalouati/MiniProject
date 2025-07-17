import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import KanbanBoard from "./pages/KanbanBoard";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  // palette: {
  //   mode: 'dark',
  //   primary: {
  //     main: '#ff5252',
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <KanbanBoard></KanbanBoard>
    </ThemeProvider>
  );
}

export default App;
