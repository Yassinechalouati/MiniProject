import { Paper, Box, Button } from "@mui/material";
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
  onClick,
  path,
  padding,
  keyName,
  method,
}) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
  };

  const handleSubmit = () => {
    onClick({ [keyName]: value, path, method });
    setValue("");
  };

  return edit ? (
    <Paper
      elevation={elevation}
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: color,
        borderRadius: "10px",
        padding: padding ?? "0px",
      }}
    >
      <TextareaAutosize
        placeholder={placeholder}
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
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
        <Button disabled={!value} onClick={handleSubmit} variant="contained">
          {editModeButtonLabel}
        </Button>
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
