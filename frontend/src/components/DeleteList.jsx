import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation } from "@tanstack/react-query";
import { deleteElement, queryClient } from "../utils/http";

export default function DeleteList({ listId }) {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  return (
    <IconButton onClick={() => mutate({ path: `/lists/${listId}` })}>
      <ClearIcon />
    </IconButton>
  );
}
