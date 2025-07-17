import { createTheme } from "@mui/material/styles";

export const themes = {
  light: createTheme({
    palette: {
      mode: "light",
      primary: { main: "#555879" },
      secondary: { main: "#98A1BC" },
      background: { default: "#F4EBD3", paper: "#DED3C4" },
      text: { primary: "#555879" },
    },
  }),
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#AAB3D0" },
      secondary: { main: "#DED3C4" },
      background: { default: "#1D1F2B", paper: "#2A2D3A" },
      text: { primary: "#F4EBD3", secondary: "#98A1BC" },
    },
  }),
};
