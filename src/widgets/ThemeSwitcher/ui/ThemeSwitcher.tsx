import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import { Button } from "@/shared/ui/Button";
import DarkIcon from "@/shared/assets/icons/dark-theme.svg";
import LightIcon from "@/shared/assets/icons/light-theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC } from "react";
import cls from "./ThemeSwitcher.module.css";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(cls.switcher, {}, [className])}>
      <Button onClick={toggleTheme} theme={"clear"}>
        {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
