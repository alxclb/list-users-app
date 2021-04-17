import React from "react";

export const ListBox = (props) => {
    return (
        <ul
            className="listbox"
            style={{ display: props.display, flexDirection: props.direction }}
        >
            {props.children}
        </ul>
    );
};

ListBox.defaultProps = {
    display: "flex",
    flexDirection: "row",
};
