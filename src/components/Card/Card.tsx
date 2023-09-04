import backgroundImg from '../../assets/card-background.svg';

interface CardProps {
  position: number;
  img: string;
  showImage?: boolean;
  disabled: boolean;
  handleChoice: () => void;
};

function Card({ position, img, showImage, disabled, handleChoice }: CardProps) {
  const imageInfo = showImage
    ? { src: img, className: '' }
    : { src: backgroundImg, className: 'opacity-20' };

  return (
    <div
      className={`rounded-lg h-[100px] w-[100px] bg-white shadow-iseasy flex justify-center items-center text-3xl cursor-pointer relative overflow-hidden ${disabled ? 'pointer-events-none' : ''}`}
      onClick={handleChoice}
    >
      <img
        className={`absolute pointer-events-none ${imageInfo.className}`}
        src={imageInfo.src}
        alt={`${position}`}
      />
      {position}
    </div>
  );
};

export default Card;
