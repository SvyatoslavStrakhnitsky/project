import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import cls from './Header.module.css';
import { HStack } from '@/shared/ui/Stack';

export const Header = memo(() => {
    return (
        <header className={classNames(cls.header)}>
            <HStack gap={8} >
                <ThemeSwitcher />
                <LangSwitcher />
            </HStack>
            <Navbar />
        </header>
    );
});
