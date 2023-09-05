import { FC } from 'react';
import './button.css';

interface ButtonProps {
    text: string;
    className: string;
}
export const Button: FC<ButtonProps> = ({text, className = 'button'}: ButtonProps) => {
    return (
        <button className={className}>{text}</button>
    )
}
