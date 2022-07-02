import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import FilterResults from "../components/FilterResults";
import GenreSelect from "../components/GenreSelect";

const GameBox = () => {
    const [games, setGames] = useState([]);
    const [genres, setGenres] = useState([]);

    const getGames = () => {
        fetch(`https://www.freetogame.com/api/games`)
        .then(result => result.json())
        .then(data => setGames(data))
        .then(console.log("1"))
    };

    useEffect(() => {
        getGames();
    console.log("2")
    }, []);

    const getGenres = () => {
        const filteredGenres = [];
        games.forEach(game => {
            if (filteredGenres.includes(game.genre)) {
                
            } else {filteredGenres.push(game.genre)}
        })
        setGenres(filteredGenres);
        console.log("3")
        console.log(genres);
    };

    useEffect(() => {
        getGenres();
        console.log("4")
    }, [games]);

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