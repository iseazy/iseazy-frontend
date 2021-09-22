import FlipCard from "./FlipCard"

export default function GameScreen({ cards, onSelectCard }) {
    return <div className="min-h-screen bg-gradient">
        <div className="flex flex-wrap justify-center mx-auto py-4 md:py-7 max-w-xl">
            { cards.map((card, idx) => <div
                key={card.id}
                className="p-2"
            >
                <FlipCard
                    card={card}
                    num={idx+1}
                    onClick={() => onSelectCard(card.id)}
                />
            </div>)}
        </div>
    </div>
}
