import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import FilterResults from "../components/FilterResults";
import GenreSelect from "../components/GenreSelect";
import GenresPieChart from "../components/GenresPieChart";

const GameBox = () => {
    const [games, setGames] = useState([]);
    const [genres, setGenres] = useState([]);
    const [results, setResults] = useState([]);

    const options = {
        title: "My Daily Activities",
    };
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

      

    const getGames = () => {
        fetch(`https://www.freetogame.com/api/games`)
        .then(result => result.json())
        .then(data => setGames(data))
        setResults(games);
    };

    useEffect(() => {getGames()}, []);
    useEffect(() => {getGenres()}, [games]);

    const getGenres = () => {
        const filteredGenres = [];
        games.forEach(game => {
            if (filteredGenres.includes(game.genre)) {
                
            } else {filteredGenres.push(game.genre)}
        })
        setGenres(filteredGenres);
    };

    const filterByGenre = (genre) => {
        const filteredGames = games.filter(game => game.genre === genre);
        setResults(filteredGames);
    };

    const onSelectGenre = (genre) => {
        filterByGenre(genre);
        console.log(genre);
    }

    return (
        <div>
            <h1>Games Box</h1>
            <Header/>
            <GenreSelect genres={genres} onSelectGenre={onSelectGenre}/>
            {results.length === 0 ? <FilterResults results={games}/> : <FilterResults results={results}/>}
            <GenresPieChart games={games} genres={genres}/>
            {/* <Chart chartType="PieChart" data={data} options={options} width={"100%"} height={"400px"}/> */}
        </div>
    );
};

export default GameBox;