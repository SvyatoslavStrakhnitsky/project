import { FC } from "react";
import { Button } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import Ukraine from "@/shared/assets/icons/ukraine-flag.svg";
import USA from "@/shared/assets/icons/usa-flag.svg";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  return (
    <div className={classNames("", {}, [className])}>
      <Button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk")
        }
        theme="clear"
      >
        {i18n.language === "uk" ? <USA /> : <Ukraine />}
      </Button>
    </div>
  );
};
