import { Box, List, Paper, Typography } from "@mui/material";
import Cards from "./Cards";
import AddContent from "./AddContent";
import { addElement, queryClient } from "../utils/http";
import { useMutation } from "@tanstack/react-query";
import DeleteList from "./DeleteList";
export default function Column(props) {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  return (
    <Paper
      sx={{
        padding: "7px",
        width: "17rem",
        borderRadius: "10px",
      }}
      elevation={6}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" component="p">
          {props.Title}
        </Typography>
        <DeleteList listId={props.id}></DeleteList>
      </Box>
      <List
        sx={{
          overflowY: "scroll",
          maxHeight: "75vh",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {props.items.map((todo) => (
          <Cards
            {...todo}
            listId={props.id}
            key={todo.id}
            // toggleTodo={toggleTodo}
            // deleteTodo={deleteTodo}
          ></Cards>
        ))}
      </List>
      <AddContent
        placeholder="Enter a title"
        minRows={1}
        maxRows={4}
        editModeButtonLabel="Add"
        buttonLabel="Add a card"
        elevation={0}
        color="transparent"
        marginTop="7px"
        onClick={mutate}
        path={`/lists/${props.id}`}
        keyName="content"
        method="POST"
      ></AddContent>
    </Paper>
  );
}
