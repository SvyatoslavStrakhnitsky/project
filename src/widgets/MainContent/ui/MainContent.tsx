import { classNames } from "@/shared/lib/classNames/classNames";
import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";
import cls from "./MainContent.module.css";

export const MainContent = () => {
  return (
    <Suspense fallback="Loading...">
      <main className={classNames(cls.main)}>
        <Outlet />
      </main>
    </Suspense>
  );
};
