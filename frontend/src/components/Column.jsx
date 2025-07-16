import { List, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Cards from "./Cards";
import AddCard from "./AddCard";

export default function Column(props) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Read a book", completed: true },
    { id: 3, text: "Read a book", completed: true },
    { id: 4, text: "Read a book", completed: true },
    { id: 5, text: "Read a book", completed: true },
    { id: 6, text: "Read a book", completed: true },
    { id: 7, text: "Read a book", completed: true },
    { id: 8, text: "Read a book", completed: true },
    { id: 9, text: "Read a book", completed: true },
    { id: 10, text: "Read a book", completed: true },
    { id: 11, text: "Read a book", completed: true },
    { id: 12, text: "Read a book", completed: true },
    { id: 13, text: "Read a book", completed: true },
    { id: 14, text: "Read a book", completed: true },
    { id: 15, text: "Read a book", completed: true },
    { id: 16, text: "Read a book", completed: true },
    { id: 17, text: "Read a book", completed: true },
  ]);

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Paper
      sx={{
        padding: "7px",
        width: "17rem",
        borderRadius: "10px",
      }}
      elevation={6}
    >
      <Typography variant="subtitle1" component="paragraph">
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
        {todos.map((todo, key) => (
          <Cards
            key={key}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          ></Cards>
        ))}
      </List>
      <AddCard text="Add a card" classname="addButton"></AddCard>
    </Paper>
  );
}
