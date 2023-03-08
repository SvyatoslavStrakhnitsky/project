import { AppLink } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classNames(cls.navbar)}>
      <ul>
        <li>
          <AppLink to="/">Home</AppLink>
        </li>
        <li>
          <AppLink to="/about">About</AppLink>
        </li>
      </ul>
    </nav>
  );
};
