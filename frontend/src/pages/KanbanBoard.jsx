import NavBar from "../components/NavBar";
import Column from "../components/Column";
import Stack from "@mui/material/Stack";
import AddContent from "../components/AddContent";
import { Box, useTheme } from "@mui/material";
import { addElement, fetchLists, queryClient } from "../utils/http";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSkeleton from "../components/LoadingSkeleton";

export default function KanbanBoard() {
  const theme = useTheme();

  const { data, isPending, isError } = useQuery({
    queryKey: ["todoLists"],
    queryFn: fetchLists,
  });

  const {
    mutate,
    isPending: isMutatePending,
    isError: isMutateError,
  } = useMutation({
    mutationFn: addElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  if (isError) {
    return (
      <>
        <NavBar></NavBar>
        <Stack
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Error fetching items come back later.
        </Stack>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Stack
        sx={{
          overflowX: "auto", // Enables horizontal scrolling
          overflowY: "hidden", // Prevent vertical scroll if not needed
          whiteSpace: "nowrap", // Prevent wrapping
          flexWrap: "nowrap",
          height: "90vh",
        }}
        padding={2}
        direction="row"
        spacing={2}
        alignItems="flex-start"
      >
        {!isPending ? (
          <>
            {data.map((list) => (
              <Column
                key={list.id}
                Title={list.title}
                items={list.items}
                id={list.id}
              />
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
                padding="7px"
                onClick={mutate}
                path="/lists"
                keyName="title"
                method="POST"
                loading={isMutatePending}
                isError={isMutateError}
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
