import NavBar from "../components/NavBar";
import Column from "../components/Column";
import Stack from "@mui/material/Stack";
import AddContent from "../components/AddContent";
import { Box, useTheme } from "@mui/material";

export default function KanbanBoard() {
  const theme = useTheme();
  return (
    <>
      <NavBar></NavBar>
      <Stack padding={2} direction="row" spacing={2} alignItems="flex-start">
        <Column Title="TODO"></Column>
        <Column Title="Doing"></Column>
        <Column Title="Done"></Column>
        <Box
          sx={{
            width: "17rem",
          }}
        >
          <AddContent
            placeholder="Enter list name..."
            minRows={2}
            maxRows={4}
            editModeButtonLabel="Add"
            buttonLabel="Add another list"
            elevation={6}
            color={theme.palette.background.paper}
          ></AddContent>
        </Box>
      </Stack>
    </>
  );
}
