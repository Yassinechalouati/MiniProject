import { Button, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { deleteElement, queryClient, updateItem } from "../utils/http";
import { useState } from "react";
import EditContent from "./EditContent";
import { errorAnimation } from "../utils/animation";
import CustomModal from "./CustomModal";

export default function Cards(props) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(props.content);
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: deleteElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  const { mutate: mutateEdit, isError: isUpdateError } = useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
    setValue(props.content);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value !== props.content) {
      mutateEdit({
        data: { content: value },
        path: `/lists/${props.listId}/items/${props.id}`,
      });
    }
    handleEdit();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onClick={handleClick}
        ></EditContent>
      ) : (
        <ListItem
          key={props.id}
          dense
          button="true"
          sx={{
            bgcolor: theme.palette.background.default,
            borderRadius: "10px",
            marginY: "7px",
            ...errorAnimation(isUpdateError),
          }}
        >
          <ListItemText
            onClick={handleEdit}
            primary={props.content}
            sx={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          />

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
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  loading={isPending}
                  disabled={isPending}
                  onClick={() =>
                    mutate({ path: `/lists/${props.listId}/items/${props.id}` })
                  }
                  sx={{
                    alignSelf: "self-start",
                    ...errorAnimation(isError),
                  }}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Stack>
            </CustomModal>
          )}

          <IconButton
            loading={isPending}
            disabled={isPending}
            onClick={handleOpen}
            edge="end"
            sx={{
              alignSelf: "self-start",
            }}
          >
            <DeleteIcon
              sx={{
                color: isPending
                  ? theme.palette.background.default
                  : theme.palette.text.primary,
              }}
            />
          </IconButton>
        </ListItem>
      )}
    </>
  );
}
