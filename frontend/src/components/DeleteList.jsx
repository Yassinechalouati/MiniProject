import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation } from "@tanstack/react-query";
import { deleteElement, queryClient } from "../utils/http";
import { errorAnimation } from "../utils/animation";

export default function DeleteList({ listId }) {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: deleteElement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoLists"] });
    },
  });

  return (
    <IconButton
      sx={{
        ...errorAnimation(isError),
      }}
      loading={isPending}
      disabled={isPending}
      onClick={() => mutate({ path: `/lists/${listId}` })}
    >
      <ClearIcon />
    </IconButton>
  );
}
