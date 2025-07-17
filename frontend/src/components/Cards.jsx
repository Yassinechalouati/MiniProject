import { ListItem, useTheme } from "@mui/material";
import { ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export default function Cards(props) {
  const theme = useTheme();

  return (
    <ListItem
      key={props.id}
      dense
      button="true"
      // onClick={() => props.toggleTodo(props.id)}
      sx={{
        bgcolor: theme.palette.background.default,
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
        primary={props.content}
        sx={{
          textDecoration: props.completed ? "line-through" : "none",
          wordBreak: "break-all",
        }}
      />
      <IconButton
        edge="end"
        // onClick={() => props.deleteTodo(props.id)}
      >
        <DeleteIcon
          sx={{
            color: theme.palette.text.primary,
          }}
        />
      </IconButton>
    </ListItem>
  );
}
