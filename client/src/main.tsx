import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Theme } from "./Components/Theme/Theme.tsx";
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Theme>
        <App />
      </Theme>
    </Router>
  </StrictMode>
);
