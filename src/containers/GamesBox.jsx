import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import FilterResults from "../components/FilterResults";
import GenreSelect from "../components/GenreSelect";

const GameBox = () => {
    const [games, setGames] = useState([]);
    const [genres, setGenres] = useState([]);

    async function getGames() {
        const url = (`https://www.freetogame.com/api/games`);
        const response = await fetch(url);
        const data = await response.json();
        setGames(data);
        getGenres();
        console.log(data);
        console.log(genres);
    }

    useEffect(() => {
        getGames();
    }, []);

    const getGenres = () => {
        const filteredGenres = [];
        games.forEach(game => {
            if (filteredGenres.includes(game.genre)) {
                
            } else {filteredGenres.push(game.genre)}
        })
        setGenres(filteredGenres);
        console.log(genres);
    }

    const filterByGenre = (games, genre) => {
        const filteredGames = games.filter(game => game.genre === genre);
        setGames(filteredGames);
    };

    return (
        <div>
            <h1>Games Box</h1>
            <Header/>
            <GenreSelect genres={genres}/>
            <FilterResults games={games}/>
        </div>
    );
};

export default GameBox;