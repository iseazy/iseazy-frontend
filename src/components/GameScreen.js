import FlipCard from "./FlipCard"

export default function GameScreen({
    cards,

    onSelectCard,
}) {
    return <div>
        { cards.map((card, idx) => <FlipCard
            key={card.id}
            card={card}
            num={idx+1}
            onClick={() => onSelectCard(card.id)}
        />) }
    </div>
}
