import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import cls from "./Header.module.css";

export const Header = memo(() => {
  return (
    <header className={classNames(cls.header)}>
      <ThemeSwitcher />
      <Navbar />
    </header>
  );
});
