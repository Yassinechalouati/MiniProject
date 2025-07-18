import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useTheme } from "@mui/material/styles";
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
        <IconButton sx={{ color: "green" }} onClick={props.onClick} edge="end">
          <CheckIcon />
        </IconButton>
        <IconButton sx={{ color: "red" }} onClick={props.handleEdit} edge="end">
          <ClearIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}
