import { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="min-h-[70px] min-w-[240px] bg-iseazy rounded-full text-white px-8 text-2xl leading-8"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;
