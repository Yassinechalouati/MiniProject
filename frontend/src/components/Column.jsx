import { List, Paper, Typography } from "@mui/material";
import Cards from "./Cards";
import AddContent from "./AddContent";

export default function Column(props) {
  // const toggleTodo = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  return (
    <Paper
      sx={{
        padding: "7px",
        width: "17rem",
        borderRadius: "10px",
      }}
      elevation={6}
    >
      <Typography variant="subtitle1" component="p">
        {props.Title}
      </Typography>
      <List
        sx={{
          overflowY: "scroll",
          maxHeight: "75vh",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {props.items.map((todo, key) => (
          <Cards
            key={key}
            {...todo}
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
      ></AddContent>
    </Paper>
  );
}
