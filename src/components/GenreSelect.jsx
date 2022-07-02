import React from "react";

const GenreSelect = ({genres}) => {
    const options = genres.map((genre, index) => {
        return <option value={genre} key={index}>{genre}</option>
    });

    return (
        <div>
            <h2>Filter By Genre</h2>
            <select defaultValue="">
                <option value="">All</option>
                {options}
            </select>
        </div>
    )
};

export default GenreSelect;