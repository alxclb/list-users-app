import React from "react";

export const Search = ({ onChange }) => {
    return (
        <div className="search">
            <label htmlFor="search-users">Search the site:</label>
            <input
                onChange={onChange}
                type="search"
                id="search-users"
                placeholder="Search Users"
            ></input>
        </div>
    );
};
