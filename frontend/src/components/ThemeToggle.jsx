import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton } from "@mui/material";
import { useTheme } from "../providers/ThemeProvider";
import { useTheme as useTheme_ } from "@mui/material";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();
  const theme = useTheme_();

  console.log("mode: ", mode);
  return (
    <IconButton
      onClick={toggleTheme}
      sx={{
        backgroundColor: theme.palette.background.default,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginX: "7px",
      }}
    >
      {mode === "light" ? (
        <DarkModeIcon
          sx={{
            marginX: "5px",
          }}
        ></DarkModeIcon>
      ) : (
        <LightModeIcon
          sx={{
            marginX: "5px",
          }}
        ></LightModeIcon>
      )}
    </IconButton>
  );
}
