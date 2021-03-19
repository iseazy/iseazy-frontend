import PropTypes from 'prop-types';

export function Button({ children, width, disabled, onClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const widthClass = width ? width : 'w-auto';
  return (
    <button
      className={`flex justify-center tracking-normal text-3xl font-bold m-2 px-5 bg-red-100 rounded-full items-center text-center disabled:opacity-50 disabled:cursor-not-allowed h-17 focus:outline-none text-white ${widthClass}`}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string,
  disabled: PropTypes.bool
};
