import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { classNames } from "@/shared/lib/classNames/classNames";

export const App = () => {
  return (
    <div className={classNames("app")}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
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
