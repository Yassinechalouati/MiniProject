import { Button } from "@mui/material";
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
    <Button
      sx={{
        ...errorAnimation(isError),
      }}
      loading={isPending}
      disabled={isPending}
      variant="contained"
      color="error"
      onClick={() => mutate({ path: `/lists/${listId}` })}
    >
      Delete
    </Button>
  );
}
