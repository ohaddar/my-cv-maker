import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: "#f3e5f5",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} />
    <App />
  </React.StrictMode>
);
