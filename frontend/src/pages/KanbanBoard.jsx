import NavBar from "../components/NavBar";
import Column from "../components/Column";
import Stack from "@mui/material/Stack";

export default function KanbanBoard() {
  return (
    <>
      <NavBar></NavBar>
      <Stack padding={2} direction="row" spacing={2} alignItems="flex-start">
        <Column Title="TODO"></Column>
        <Column Title="Doing"></Column>
        <Column Title="Done"></Column>
      </Stack>
    </>
  );
}
