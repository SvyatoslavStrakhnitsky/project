import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar/ui/Navbar";
import { useTheme } from "@/app/providers/ThemeProvider";
import cls from "./Header.module.css";

export const Header = memo(() => {
  const { toggleTheme } = useTheme();
  return (
    <header className={classNames(cls.header)}>
      <button onClick={toggleTheme}>Theme change</button>
      <Navbar />
    </header>
  );
});
