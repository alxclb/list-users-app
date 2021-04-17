import React from "react";

export const Notification = ({ icon, notification, counts }) => {
    return (
        <li className="notification">
            <div>
                <span className="img-wrapper">
                    <img src={icon} alt="icon" />
                </span>
                <span className="note">{notification}</span>
            </div>
            <div className="counts">{counts}</div>
        </li>
    );
};

Notification.defaultProps = {
    counts: 0,
};
