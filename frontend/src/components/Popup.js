import React from "react";

const Popup = ({ isOpen, closePopup, children }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closePopup}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
