import { Box, List, Paper, Typography } from "@mui/material";
import Cards from "./Cards";
import AddContent from "./AddContent";
import { addElement, queryClient, updateItem } from "../utils/http";
import { useMutation } from "@tanstack/react-query";
import DeleteList from "./DeleteList";
import { useState } from "react";
import EditContent from "./EditContent";
import { errorAnimation } from "../utils/animation";
export default function Column(props) {
  const [edit, setEdit] = useState(false);

  const [value, setValue] = useState(props.Title);

  const { mutate, isPending } = useMutation({
    mutationFn: addElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  const { mutate: mutateEdit, isError: isPendingError } = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
    setValue(props.Title);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    handleEdit();
    if (value !== props.Title) {
      mutateEdit({
        data: { title: value },
        path: `/lists/${props.id}`,
      });
    }
  };

  return (
    <Paper
      sx={{
        padding: "7px",
        width: "17rem",
        minWidth: "17rem",
        borderRadius: "10px",
      }}
      elevation={6}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        {edit ? (
          <EditContent
            minRows={4}
            maxRows={4}
            value={value}
            onChange={handleChange}
            edit={edit}
            handleEdit={handleEdit}
            onClick={handleClick}
          ></EditContent>
        ) : (
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              ...errorAnimation(isPendingError),
            }}
            onClick={handleEdit}
            variant="subtitle1"
            component="p"
          >
            {props.Title}
          </Typography>
        )}

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
          <Cards {...todo} listId={props.id} key={todo.id}></Cards>
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
        loading={isPending}
      ></AddContent>
    </Paper>
  );
}
