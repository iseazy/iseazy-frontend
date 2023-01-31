interface HomeProps {
    startGame: () => void
}

export function Home ({ startGame }: HomeProps) {
  return (
    <div className="Home">
      <h1>MeMemory</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  )
}
