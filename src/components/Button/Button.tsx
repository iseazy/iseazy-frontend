import { FC } from 'react';
import './button.css';

interface ButtonProps {
    text: string;
}
export const Button: FC<ButtonProps> = ({text}: ButtonProps) => {
    return (
        <button className="button">{text}</button>
    )
}
