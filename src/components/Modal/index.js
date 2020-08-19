import React from "react";
import "./index.css";

export const Modal = ({ open, close, children }) => {
  if (!open) return null;

  return (
    <div className="Modal-overlay" onClick={close}>
      <div className="Modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
