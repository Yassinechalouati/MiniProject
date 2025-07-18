import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingSkeleton() {
  return (
    <Paper
      sx={{
        padding: "7px",
        width: "17rem",
        borderRadius: "10px",
      }}
      elevation={6}
    >
      <Skeleton variant="rounded" animation="wave" height={30} />
      <List
        sx={{
          maxHeight: "75vh",
        }}
      >
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
      </List>
      <Skeleton variant="rounded" animation="wave" height={30} />
    </Paper>
  );
}
