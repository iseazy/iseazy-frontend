import { FC } from 'react';
import styled from 'styled-components/macro'

interface ButtonProps{
    onClick: (...args:any[]) => void
}

const ButtonStyled = styled.button`
    background: #E50A4F;
    border-radius: 35px;
    opacity: 1;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0px;
    color: #FFFFFF;
    font-size: 26px;
    width: fit-content;
    padding: 20px 60px;
    border: 0;
    place-self: center;
    &:hover { 
        background: #fa296b;
    }
`;

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    )
}

export default Button
