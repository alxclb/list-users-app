import React from "react";

export const Desc = ({ title, text }) => {
    return (
        <>
            {text === null ? null : (
                <div className="description">
                    <span>{title}:</span>
                    <span> {text}</span>
                </div>
            )}
        </>
    );
};
