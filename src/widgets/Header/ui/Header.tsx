import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import cls from './Header.module.css';

export const Header = memo(() => {
    return (
        <header className={classNames(cls.header)}>
            <ThemeSwitcher />
            <LangSwitcher />
            <Navbar />
        </header>
    );
});
