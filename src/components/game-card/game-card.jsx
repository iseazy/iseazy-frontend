export const GameCard = ({ id, src, flipped, title, onClick }) => {
    const style = {
        backgroundImage: `url(${ flipped ? src : 'images/background.svg' })`
    };
    const className = `game-play__card ${ flipped ? 'game-play__card--flipped' : 'game-play__card--enabled' }`;
    const handleClick = () => onClick(id);

    return (
        <div className="game-play-card__wrap">
            <button className={ className } style={ style } onClick={ handleClick }>
                <h1>{ flipped ? '' : title }</h1>
            </button>
        </div>
    );
};
