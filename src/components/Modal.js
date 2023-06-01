import React from "react";
import { createPortal } from "react-dom";

function Modal({ onClose, children, actionBar }) {
  return createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-80 p-10 bg-white">
        {children}
        {actionBar}
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
