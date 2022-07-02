import React, {useEffect, useState} from "react";

const GameBox = () => {
    const [games, setGames] = useState([]);
    const [url, setUrl] = useState("")
    const [filter, setFilter] = useState("");    

    async function getGames() {
        const url = (`https://www.freetogame.com/api/games`);
        const response = await fetch(url);
        const data = await response.json();
        setGames(data);
        console.log(data);
    }

    useEffect(() => {
        getGames();
    }, [])

    return <h1>Games Box</h1> ;
};

export default GameBox;