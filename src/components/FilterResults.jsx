import React from "react";

const FilterResults = ({results}) => {
    const resultList = results.map(game => <li key={game.id}>{game.title}</li>)
    return (
        <div>
            <h2>Results</h2>
            <ol>
                {resultList}
            </ol>
        </div>
    );
};

export default FilterResults;