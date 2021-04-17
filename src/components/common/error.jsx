import React from "react";

export const Error = ({ status, message }) => {
    console.log(status)
    return (
        <div className="error">
            <h1>
                Status: <span>{status}</span>
            </h1>
            <p>{message}</p>
        </div>
    );
};
