import * as React from "react";
import { render } from "react-dom";
import { PufInputShowcase } from "./components/PufInput/PufInputShowcase";
import { ThemeProvider } from "styled-components";
import { pufTheme } from "./utils/theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={pufTheme}>
      <PufInputShowcase />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
