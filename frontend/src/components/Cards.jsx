import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
//TODO:
// make line break when text in card overflows

export default function Cards(props) {
  return (
    <ListItem
      key={props.id}
      dense
      button="true"
      onClick={() => props.toggleTodo(props.id)}
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
        primary={props.text}
        sx={{
          textDecoration: props.completed ? "line-through" : "none",
          wordBreak: "break-all",
        }}
      />
      <IconButton edge="end" onClick={() => props.deleteTodo(props.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
