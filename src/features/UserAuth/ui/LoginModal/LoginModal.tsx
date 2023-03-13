import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { FC, Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose
    } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader/>}>
                <LoginFormAsync onClose={onClose}/>
            </Suspense>
        </Modal>
    );
};