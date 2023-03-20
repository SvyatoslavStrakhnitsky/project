import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
    rootMargin?: string;
    threshold?: number;
}

export const useInfiniteScroll = (args: UseInfiniteScrollOptions) => {
    const {
        callback,
        triggerRef,
        wrapperRef,
        rootMargin,
        threshold,
    } = args;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: `${rootMargin || '0px'}`,
                threshold: threshold || 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, rootMargin, threshold, triggerRef, wrapperRef]);
};
