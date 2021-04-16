import styled from 'styled-components/macro';
import { CardProps } from "./";

export const CardStyled = styled.div<CardProps>`
    ${({ shown, index, size }) => shown ? `
        background: url(https://picsum.photos/id/${index + 10}/${size}/${size}); /* Small hack to not repeat photos, picsum was a bit buggy with the lower ids */
    ` : `
        background: url('./background.svg');
    `}
    ${({ size }) => `
        height: ${size}px;
        width: ${size}px;
        line-height: ${size}px;
    `}

    border-radius: 8px;
    box-shadow: 0px 3px 6px #00000033;
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: 32px;
`
export const GhostContainer = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    &:hover {
        cursor: pointer;
    }
`;