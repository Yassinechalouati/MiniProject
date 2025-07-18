import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import IconBut from "./IconBut";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { errorAnimation } from "../utils/animation";

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
  loading,
  isError,
}) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");
  const theme = useTheme();

  const handleEdit = () => {
    setEdit((prevValue) => !prevValue);
    setValue("");
  };

  const handleSubmit = () => {
    onClick({ [keyName]: value, path, method, keyName });
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
        placeholder={!loading ? placeholder : ""}
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        required
        disabled={loading}
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "10px",
          resize: "none",
          wordBreak: "break-word",
          borderRadius: "5px",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
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
        <Button
          sx={{
            ...errorAnimation(isError),
          }}
          disabled={!value}
          loading={loading}
          onClick={handleSubmit}
          variant="contained"
        >
          {editModeButtonLabel}
        </Button>
        <IconBut
          onClick={handleEdit}
          disabled={loading}
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
