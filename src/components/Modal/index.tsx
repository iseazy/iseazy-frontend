import React, { memo } from 'react';

interface ModalProps {}

const Modal: React.FC<ModalProps> = memo(({ children }) => {
    return (
        <div className='modal'>
            <div className='modal__content'>
                {children}
            </div>
        </div>
    );
});

export default Modal;