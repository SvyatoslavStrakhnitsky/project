import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { FC, MutableRefObject, ReactNode, useRef } from 'react';
import cls from './Page.module.css';

interface PageProps {
    children: ReactNode;
    className?: string;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
    const {
        children,
        className,
        onScrollEnd
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            {onScrollEnd &&  <div
                ref={triggerRef}
                className={cls.trigger}
            />
            }     
        </section>
    );
};