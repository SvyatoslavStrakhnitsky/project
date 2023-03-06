import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>sdfsdf</button>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1>Ooops...</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
};
