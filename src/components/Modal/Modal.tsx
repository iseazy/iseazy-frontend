import { createPortal } from 'react-dom';
import Button from '../Button/Button';

interface ModalProps {
  content: JSX.Element;
  actionText: string;
  action: () => void;
}

function Modal({ content, action, actionText }: ModalProps) {
  return createPortal(
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-60 text-iseasy-gray-400">
      <div className="px-12 py-8 bg-white md:w-[500px] md:min-h-[240px] rounded-[20px] mx-2">
        {content}
        <div className="flex justify-center mt-8">
          <Button
            text={actionText}
            onClick={action}
          />
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal;
