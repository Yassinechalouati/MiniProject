import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

export default function LoadingSkeleton() {
  return (
    //Lots of different units are used, overall not being consistent, will be hard later on to understand by developers
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
      {/*
      // Avoid duplicated code, use map function to generate repeated elements
      {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
          sx={{
            marginY: "7px",
          }}
          variant="rounded"
          animation="wave"
          height={50}
        />
        ))}
      */}
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
