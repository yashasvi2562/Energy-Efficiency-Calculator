// ForgotPasswordModal.js
import React from "react";

const ForgotPasswordModel = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Forgot Password?</h2>
        <p>Please contact support for password reset.</p>
      </div>
    </div>
  );
};

export default ForgotPasswordModel;
