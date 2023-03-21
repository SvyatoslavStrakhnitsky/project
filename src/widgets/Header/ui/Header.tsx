import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Navbar } from '@/widgets/Navbar';
import { HStack } from '@/shared/ui/Stack';
import cls from './Header.module.css';

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
