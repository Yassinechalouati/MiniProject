import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

export default function Column() {
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
        width: "15rem",
        padding: "7px",
        // height: "auto",
        height: "90vh",
      }}
      elevation={4}
    >
      <Typography variant="subtitle1" component="h2">
        To Do
      </Typography>
      <List
        sx={{
          overflowY: "scroll",
          maxHeight: "90%",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            dense
            button
            onClick={() => toggleTodo(todo.id)}
            sx={{
              bgcolor: "gray",
              borderRadius: "10px",
              marginY: "7px",
            }}
          >
            {/* <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
            /> */}
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            />
            <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" component="h2">
        Add a card
      </Typography>
    </Paper>
  );
}
