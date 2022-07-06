import React from "react";
import './GenreSelect.css'

const GenreSelect = ({genres, onSelectGenre}) => {
    const options = genres.map((genre, index) => {
        return <option value={genre} key={index}>{genre}</option>
    });

    const handleChange = (event) => {
        const selectedGenre = event.target.value;
        onSelectGenre(selectedGenre);
    }

    return (
        <span className="filter-header">
            <h2>Filter By Genre</h2>
            <select className="genre-select" defaultValue="All" onChange={handleChange}>
                <option value="">Genres</option>
                {options}
            </select>
        </span>
    )
};

export default GenreSelect;