import './button.css';

interface ButtonProps {
    text: string;
    type?: 'main' | 'outline';
    handleClick?: () => void;
}
export const Button = ({text, type = 'main', handleClick}: ButtonProps) => {
    return (
        <button className={`button ${type}`} onClick={handleClick}>{text}</button>
    )
}
