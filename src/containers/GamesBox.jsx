import React, {useEffect, useState} from "react";
import GenreSelect from "../components/GenreSelect";
import FilterResults from "../components/FilterResults";
import GenresPieChart from "../components/GenresPieChart";
import '../components/FilterResults.css';
import './GamesBox.css'

const GameBox = () => {

    const [games, setGames] = useState([]);
    const [genres, setGenres] = useState([]);
    const [results, setResults] = useState([]);

    const getGames = () => {
        fetch(`https://www.freetogame.com/api/games`)
        .then(result => result.json())
        .then(data => setGames(data))
        setResults(games);
    };

    useEffect(() => {getGames()}, []);
    useEffect(() => {getGenres()}, [games]);

    const getGenres = () => {
        const filteredGenres = ["All"];
        games.forEach(game => {
            if (filteredGenres.includes(game.genre)) {
                
            } else {filteredGenres.push(game.genre)}
        })
        setGenres(filteredGenres);
    };

    const filterByGenre = (genre) => {
        let filteredGames = [];
        if (genre == 'All') {
            filteredGames = [...games];
            setResults(filteredGames);
        } else {
            filteredGames = games.filter(game => game.genre === genre);
            setResults(filteredGames);
        }
    };

    const onSelectGenre = (genre) => {
        filterByGenre(genre);
        console.log(genre);
    }

    return (
        <div>
            <header className="center">
                <h1>Games Box</h1>
            </header>

            <GenreSelect genres={genres} onSelectGenre={onSelectGenre}/>

            {results.length === 0 ? <FilterResults results={games}/> : <FilterResults results={results}/>}

            <GenresPieChart games={games} genres={genres}/>
        </div>
    );
};

export default GameBox;

