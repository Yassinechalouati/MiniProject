import "./App.css";

import KanbanBoard from "./pages/KanbanBoard";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <KanbanBoard></KanbanBoard>
    </ThemeProvider>
  );
}

export default App;
