import Button from '../../components/Button/Button';
import logo from '../../assets/logo.svg';

interface StartGameProps {
  nextStep: () => void
}

function StartGame({ nextStep }: StartGameProps): JSX.Element {

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-iseasy-gray-200 shadow-iseasy h-[130px] w-[130px] rounded-full mb-4 flex justify-center items-center">
        <img src={logo} alt="React Logo" />
      </div>

      <h1 className="text-center text-7xl mb-20">
        MeMemory
      </h1>

      <Button text="Comenzar" onClick={nextStep} />
    </div>
  )
}

export default StartGame;