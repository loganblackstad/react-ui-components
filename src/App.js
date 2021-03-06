import React from "react";
import "./styles.css";

import { ThemeProvider, Link } from "react-ui";
import { tokens, components } from "react-ui/themes/light";

// import Airline from "./components/airline";

export default function App() {
  return (
    <ThemeProvider tokens={tokens} components={components}>
      <Link
        href="https://react-ui.dev/components"
        target="_blank"
        marginBottom={4}
      >
        Open documentation
      </Link>

      {/* <Airline /> */}

    </ThemeProvider>
  );
}
