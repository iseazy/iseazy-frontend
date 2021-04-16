import {CardStyled,GhostContainer} from './Card.stylex';
export interface CardProps {
    size?: number;
    shown: Boolean;
    index: number;
    text?: number;
    onClick: (...args: any[]) => void;
}

const Card = ({ shown, size = 100, index,text, onClick }: CardProps) => {
    return (
        <CardStyled size={size} onClick={onClick} shown={shown} index={index}>
            <GhostContainer />
            {!shown && <strong>{text}</strong>}
        </CardStyled>
    )
}
export default Card
