import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Improved import style
import "./main.css"; // Ensure you import CSS correctly
import Home from "./views/Home"; // Direct import statement

// Define routes
const App = () => (
  <StrictMode>
    <Router
      future={{
        v7_startTransition: true, // Opt-in to the startTransition behavior
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);

createRoot(document.getElementById("root")!).render(<App />);
