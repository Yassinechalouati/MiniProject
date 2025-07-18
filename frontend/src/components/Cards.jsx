import { ListItem, useTheme } from "@mui/material";
import { ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { deleteElement, queryClient } from "../utils/http";
import { useState } from "react";
import EditContent from "./EditContent";

export default function Cards(props) {
  const [edit, setEdit] = useState(false);
  const theme = useTheme();
  const [value, setValue] = useState(props.content);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {edit ? (
        <EditContent
          minRows={4}
          maxRows={4}
          value={value}
          onChange={handleChange}
          edit={edit}
          handleEdit={handleEdit}
        ></EditContent>
      ) : (
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
            onClick={handleEdit}
            primary={props.content}
            sx={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          />
          <IconButton
            onClick={() =>
              mutate({ path: `/lists/${props.listId}/items/${props.id}` })
            }
            edge="end"
            sx={{ alignSelf: "self-start" }}
            // onClick={() => props.deleteTodo(props.id)}
          >
            <DeleteIcon
              sx={{
                color: theme.palette.text.primary,
              }}
            />
          </IconButton>
        </ListItem>
      )}
    </>
  );
}
