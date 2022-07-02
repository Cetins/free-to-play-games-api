import React from "react";

const CategoryResults = ({games}) => {
    const results = games.map(game => <li key={game.id}>{game.title}</li>)
    return (
        <div>
            <h2>Games Results</h2>
            <ol>
                {results}
            </ol>
        </div>
    );
};

export default CategoryResults;