import { getPageScrollByPath, scrollRestorationActions } from '@/features/ScrollRestoration';
import { StateSchema } from '@/shared/config/redux/types/StateSchema';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { FC, MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
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

    const dispatch = useAppDispatch();
    const {pathname} = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getPageScrollByPath(state, pathname));

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestorationActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        }));
    }, 500);

    return (
        <div
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={handleScroll}
        >
            {children}
            {onScrollEnd &&  <div
                ref={triggerRef}
                className={cls.trigger}
            />
            }     
        </div>
    );
};