import PropTypes from 'prop-types';

import './Card.css';

export function Card({ imgId, children, rotate, onClick }) {
  return (
    <div className={`${rotate ? 'rotate' : ''} flip-card w-16 h-16 sm:w-25 sm:h-25 bg-transparent`}>
      <div className="flip-card-inner duration-700 relative w-full h-full">
        <div
          onClick={onClick}
          className="flip-card-front absolute w-full h-full flex justify-center items-center rounded-lg cursor-pointer shadow-logo bg-white bg-bg-gradient bg-cover"
        >
          <div className="flex text-4.5xl text-gray-100">{children}</div>
        </div>
        <img
          alt="card"
          src={`assets/img/Image-${imgId}.png`}
          className="flip-card-back cursor-default text-xs absolute w-full h-full rounded-lg shadow-logo"
        />
      </div>
    </div>
  );
}
Card.propTypes = {
  rotate: PropTypes.bool,
  onClick: PropTypes.func,
  imgId: PropTypes.number,
  children: PropTypes.any
};
