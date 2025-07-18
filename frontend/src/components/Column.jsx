import {
  Box,
  Button,
  IconButton,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Cards from "./Cards";
import AddContent from "./AddContent";
import { addElement, queryClient, updateItem } from "../utils/http";
import { useMutation } from "@tanstack/react-query";
import DeleteList from "./DeleteList";
import { useState } from "react";
import EditContent from "./EditContent";
import { errorAnimation } from "../utils/animation";
import CustomModal from "./CustomModal";
import ClearIcon from "@mui/icons-material/Clear";

export default function Column(props) {
  const [edit, setEdit] = useState(false);

  const [value, setValue] = useState(props.Title);
  const [open, setOpen] = useState(false);

  const { mutate, isPending, isError } = useMutation({
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        {open && (
          <CustomModal handleClose={handleClose} listId={props}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              gutterBottom
            >
              Confirm Deletion
            </Typography>
            <Typography id="transition-modal-description" sx={{ mb: 3 }}>
              Are you sure you want to delete this item? This action cannot be
              undone.
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="outlined" color="inherit" onClick={handleClose}>
                Cancel
              </Button>
              <DeleteList listId={props.id}></DeleteList>
            </Stack>
          </CustomModal>
        )}

        <IconButton onClick={handleOpen}>
          <ClearIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          overflowY: "scroll",
          maxHeight: "70vh",
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
        isError={isError}
      ></AddContent>
    </Paper>
  );
}
