import { List, Paper, Skeleton } from "@mui/material";

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
