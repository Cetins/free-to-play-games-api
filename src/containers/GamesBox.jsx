import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import FilterCategory from "../components/FilterCategory";
import CategoryResults from "../components/CategoryResults";

const GameBox = () => {
    const [games, setGames] = useState([]);
    const [url, setUrl] = useState("");
    const [filter, setFilter] = useState("");    
    const [categories, setCategories] = useState([]);

    async function getGames() {
        const url = (`https://www.freetogame.com/api/games`);
        const response = await fetch(url);
        const data = await response.json();
        setGames(data);
        console.log(data);
    }

    useEffect(() => {
        getGames();
    }, []);

    return (
        <div>
            <h1>Games Box</h1>
            <Header/>
            <FilterCategory/>
            <CategoryResults games={games}/>
        </div>
    );
};

export default GameBox;