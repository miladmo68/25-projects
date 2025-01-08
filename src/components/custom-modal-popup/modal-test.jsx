import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          id={"custo-id"}
          body={<div>Customized body</div>}
          header={<div>Customized header</div>}
          footer={<h3>Customized footer</h3>}
        />
      )}
    </div>
  );
}
