import PropTypes from 'prop-types';

import { Modal } from './common/Modal';
import { ReactComponent as Clock } from '../assets/Clock.svg';
import { Button } from './common/Button';

export const PlayAgainModal = ({ showModal, time, onClick }) => (
  <Modal showModal={showModal} width="w-auto sm:w-100" height="h-60">
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col sm:flex-row w-full h-1/2 text-gray-100 font-bold items-center justify-between px-12">
        <span className="text-3.5xl mt-6 sm:mt-0">¡Completado!</span>
        <div className="flex w-full justify-end items-center">
          <Clock />
          <span className="text-6xl ml-4">{time}</span>
        </div>
      </div>
      <div className="flex w-full h-1/2 justify-center items-end pb-7">
        <Button width="w-60" onClick={onClick}>
          Jugar otra vez
        </Button>
      </div>
    </div>
  </Modal>
);

PlayAgainModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  time: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
