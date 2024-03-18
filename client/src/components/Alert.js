import React, { useState } from "react";
import './Alert.css';

const Alert = ({ isOpen, onCancel, message, type }) => {
    const [isClosed, setIsClosed] = useState(false);

    const handleCancel = () => {
        setIsClosed(true);
        onCancel();
    };

    return isOpen && !isClosed ? (
        <div className="alert" data-type={type}>
            <h3>{message}</h3>
            <button onClick={handleCancel}>Confirm</button>
        </div>
    ) : null;
};

export default Alert;
