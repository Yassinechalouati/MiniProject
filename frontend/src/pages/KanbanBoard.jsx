import NavBar from "../components/NavBar";
import Column from "../components/Column";
import Stack from "@mui/material/Stack";
import AddContent from "../components/AddContent";
import { Box, useTheme } from "@mui/material";
import { fetchLists } from "../utils/http";
import { useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "../components/LoadingSkeleton";

export default function KanbanBoard() {
  const theme = useTheme();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["todoLists"],
    queryFn: fetchLists,
  });

  return (
    <>
      <NavBar />
      <Stack padding={2} direction="row" spacing={2} alignItems="flex-start">
        {!isPending ? (
          <>
            {data.map((list) => (
              <Column key={list.id} Title={list.title} items={list.items} />
            ))}
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
              />
            </Box>
          </>
        ) : (
          <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </>
        )}
      </Stack>
    </>
  );
}
