import styled from 'styled-components/macro';

interface TitleProps {
    size?: string;
}

const Title = styled.h1 < TitleProps>`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.35px;
    font-size: ${({size}) => size};
    color: #333333;
`;
Title.defaultProps = {
    size: "70px"
}
export default Title
