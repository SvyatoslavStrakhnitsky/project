import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage.async";
import "./index.css";
import styles from "./index.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="*" element={<h1>Ooops...</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
