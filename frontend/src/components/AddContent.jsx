import { Paper, Box, Button, useTheme } from "@mui/material";
import IconBut from "./IconBut";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function AddContent({
  placeholder,
  minRows,
  maxRows,
  editModeButtonLabel,
  buttonLabel,
  color,
  marginTop,
  elevation,
}) {
  const [edit, setEdit] = useState(false);
  const theme = useTheme();

  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
  };
  return edit ? (
    <Paper
      elevation={elevation}
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: color,
        borderRadius: "10px",
        padding: "7px",
      }}
    >
      <TextareaAutosize
        placeholder={placeholder}
        minRows={minRows}
        maxRows={maxRows}
        style={{
          padding: "10px",
          marginTop: "10px",
          resize: "none",
          wordBreak: "break-word",
          borderRadius: "5px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          marginTop: "7px",
        }}
      >
        <Button variant="contained">{editModeButtonLabel}</Button>
        <IconBut
          onClick={handleEdit}
          Icon={
            <ClearIcon
              sx={{
                width: "20px",
                height: "20px",
              }}
            ></ClearIcon>
          }
          sx={{
            borderRadius: "5px",
            marginLeft: "7px",
          }}
        />
      </Box>
    </Paper>
  ) : (
    <IconBut
      onClick={handleEdit}
      text={buttonLabel}
      Icon={
        <AddIcon
          sx={{
            width: "20px",
            height: "20px",
          }}
        ></AddIcon>
      }
      sx={{
        display: "flex",
        padding: "5px",
        justifyContent: "flex-start",
        width: "100%",
        borderRadius: "10px",
        marginTop: marginTop ? marginTop : "0px",
        border: "none",
        cursor: "pointer",
        alignItems: "center",
        bgcolor: color,
      }}
    />
  );
}
