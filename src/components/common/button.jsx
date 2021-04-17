import React from "react";

export const Button = ({ title, onClick }, props) => {
    return (
        <button type="button" onClick={onClick} {...props}>
            {title}
        </button>
    );
};
