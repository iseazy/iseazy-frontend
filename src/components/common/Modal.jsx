import PropTypes from 'prop-types';

export function Modal({ showModal, width, height, children }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex w-auto my-6 items-center">
              <div className="flex flex-col rounded-2.5xl shadow-modal relative flex flex-col w-auto bg-white outline-none focus:outline-none">
                <div className={`flex ${width ? width : 'w-auto'} ${height ? height : 'h-auto'} flex-auto`}>
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
Modal.propTypes = {
  children: PropTypes.any.isRequired,
  showModal: PropTypes.bool.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};
