import React from "react";

interface IConfirmPopup {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
}

const ConfirmPopup: React.FC<IConfirmPopup> = ({ isOpen, onDelete, onClose }) => {
  return (
    <div className={`overlay ${isOpen ? "overlay_opened" : ""}`}>
      <div
        className="popup-container"
      >
        <h1>Вы уверены, что хотите удалить задачу?</h1>
        <button type="submit" onClick={onDelete} className="btn popup-container__confirm">
          Удалить
        </button>
        <i className="material-icons popup-container__close white-text" onClick={onClose}>close</i>
      </div>
    </div>
  );
};

export default ConfirmPopup;
