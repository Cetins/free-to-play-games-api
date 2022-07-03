import React from "react";
import './FilterResults.css';

const FilterResults = ({results}) => {
    const resultList = results.map(game => 
        <div key={game.id} className="game-list-card">
            <h3>{game.title}</h3>
            <h4>{game.developer}</h4>
            <p>{game.platform}</p>
            <img className="game-list-card-img" src={game.thumbnail} alt={game.title}/>
            <p>{game.short_description}</p>
            <a href={game.game_url}>Visit <strong>{game.title}</strong> page</a>
        </div>
        )
    return (
        <section className="card-section">
                {resultList}
        </section>
    );
};

export default FilterResults;