import React from "react";

const GenreSelect = ({genres, onSelectGenre}) => {
    const options = genres.map((genre, index) => {
        return <option value={genre} key={index}>{genre}</option>
    });

    const handleChange = (event) => {
        const selectedGenre = event.target.value;
        onSelectGenre(selectedGenre);
    }

    return (
        <div>
            <h2>Filter By Genre</h2>
            <select defaultValue="" onChange={handleChange}>
                <option value="">All</option>
                {options}
            </select>
        </div>
    )
};

export default GenreSelect;