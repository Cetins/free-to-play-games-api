import React from "react";

const FilterResults = ({games}) => {
    const results = games.map(game => <li key={game.id}>{game.title}</li>)
    return (
        <div>
            <h2>Filter Results</h2>
            <ol>
                {results}
            </ol>
        </div>
    );
};

export default FilterResults;