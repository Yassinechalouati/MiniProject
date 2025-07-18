import {
  Box,
  IconButton,
  ListItem,
  TextareaAutosize,
  useTheme,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

export default function EditContent(props) {
  const theme = useTheme();
  return (
    <ListItem
      dense
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        padding: "0px",
      }}
    >
      <TextareaAutosize
        minRows={props.minRows}
        maxRows={props.maxRows}
        value={props.value}
        onChange={props.onChange}
        style={{
          padding: "10px",
          resize: "none",
          wordBreak: "break-word",
          borderRadius: "10px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          width: "80%",
          marginRight: "10px",
          marginBottom: "5px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          sx={{ color: "green" }}
          onClick={props.handleEdit}
          edge="end"
        >
          <CheckIcon />
        </IconButton>
        <IconButton sx={{ color: "red" }} onClick={props.handleEdit} edge="end">
          <ClearIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}
