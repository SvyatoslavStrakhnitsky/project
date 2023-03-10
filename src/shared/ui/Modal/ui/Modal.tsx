import {
    FC, 
    ReactNode, 
    MouseEvent,
    useState, 
    useRef, 
    useCallback, 
    useEffect, 
    MutableRefObject,
} from 'react';
import { classNames, Mods } from '@/shared/lib/helpers/classNames/classNames';
import { Portal } from '@/shared/ui/Portal';
import cls from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        children, className, isOpen, onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onCloseOverlayHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose(); 
            setIsClosing(false);
        }, ANIMATION_DELAY);
        
    }, [onClose]);

    const onCloseContentHandler = (e: MouseEvent) => e.stopPropagation();

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onCloseOverlayHandler();
    }, [onCloseOverlayHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        } return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseOverlayHandler}>
                    <div className={cls.content} onClick={onCloseContentHandler}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
