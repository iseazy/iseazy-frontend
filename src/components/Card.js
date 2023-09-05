export default function Card({
  card,
  handleChoice,
  flipped,
  comparationInProgress,
}) {
  // handle para prevenir multiples clicks a una misma carta
  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        handleChoice(card);
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        return;
    }
  };

  return (
    <div className="memory-card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card_front" />
        <img
          className="reverse"
          onClick={comparationInProgress ? null : handleClick}
          src={"/img/reverse_card.png"}
          alt="card_reverse"
        />
      </div>
    </div>
  );
}
