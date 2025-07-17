import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { themes } from "../utils/themes"; // Should export an object like { light: lightTheme, dark: darkTheme }

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

// Create context
const ThemeContext = createContext();

// Provider component
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    // Fallback to system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme-mode", newMode);
      return newMode;
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme-mode")) {
        setMode(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const contextValue = useMemo(
    () => ({
      mode,
      theme: themes[mode],
      toggleTheme,
    }),
    [mode, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={themes[mode]}>
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            "*": {
              scrollbarColor: `${theme.palette.primary.main} transparent`,
              scrollbarWidth: "thin",
            },
            "*::-webkit-scrollbar": {
              width: 8,
              height: 8,
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: 4,
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
          })}
        />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
