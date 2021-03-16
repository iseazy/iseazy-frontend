import timeIcon from '../assets/icons/clock.svg'

function Modal({ setComponentState, time }) {
    return (
        <>
            <div className="modal-response">
                <div>
                    <span className="title-response">¡Completado!</span>
                    <img alt="icon-timer" title="icon-timer" src={timeIcon} />
                    <span className="timer">{time}</span>
                </div>
                <button className="primary-button" onClick={() => setComponentState(0)}>Jugar otra vez</button>
            </div>
        </>
    );
}

export default Modal;
