import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, useColorScheme } from "@mui/material";

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      sx={{
        // backgroundColor: "#1976d2",
        color: "white",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        marginX: "7px",
        // "&:hover": {
        //   backgroundColor: "#1565c0",
        // },
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
