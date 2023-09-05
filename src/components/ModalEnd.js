import { useState } from "react";
import { Modal, ModalBody, ModalFooter, Label } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../css/modal.css";

export default function ModalEnd({ timeRecord, handleGameOver }) {
  const [openModal, setOpenModal] = useState(true);

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const returnMenu = () => {
    setOpenModal(false);
    handleGameOver();
  };

  return (
    <Modal isOpen={openModal} style={modalStyles}>
      <ModalBody>
        <Label className="memory-title">¡Completado!</Label>
        <Label className="memory-title time-record">{timeRecord}</Label>
      </ModalBody>

      <ModalFooter>
        <button onClick={returnMenu} className="button-start">
          Jugar otra vez
        </button>
      </ModalFooter>
    </Modal>
  );
}
