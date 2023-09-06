import { FC } from 'react';
import './button.css';

interface ButtonProps {
    text: string;
    className?: string;
    handleClick?: () => void;
}
export const Button: FC<ButtonProps> = ({text, className = 'button', handleClick}: ButtonProps) => {
    return (
        <button className={className} onClick={handleClick}>{text}</button>
    )
}
