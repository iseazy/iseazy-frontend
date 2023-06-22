import { useMemo, useState } from 'react';
import StartGame from './views/StartGame/StartGame';
import Game from './views/Game/Game';

enum Steps {
  Start,
  Game,
};

function App() {
  const [step, setStep] = useState<Steps>(Steps.Start);

  const StepsMap: Record<Steps, JSX.Element> = useMemo(() => ({
    [Steps.Start]: <StartGame nextStep={() => setStep(Steps.Game)} />,
    [Steps.Game]: <Game />
  }), []);

  return (
    <div className="App min-h-screen">
      {StepsMap[step]}
    </div>
  );
};

export default App;
