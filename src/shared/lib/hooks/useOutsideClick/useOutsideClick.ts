import { useEffect, useRef } from 'react';

export const useOutsideClick = <T>(callback: (...args: T[]) => void) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect((...args) => {
        document.addEventListener('click', (e:  MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback(...args);                              
            }
        });
    }, [callback]);

    return ref;
};