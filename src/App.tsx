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
    [Steps.Game]: <Game nextStep={() => setStep(Steps.Start)} />
  }), []);

  return (
    <div className="App m-0 font-sans bg-iseasy-gray-100 text-iseasy-gray-400 min-h-screen">
      {StepsMap[step]}
    </div>
  );
};

export default App;
