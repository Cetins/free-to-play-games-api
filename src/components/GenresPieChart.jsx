import React from "react";
import { Chart } from "react-google-charts";

const GenresPieChart = ({games, genres}) => {

    const genreData = [["Genre", "Games Count"]];

    const genreOptions = {title: "Games Count Per Genre"};

    const countGames = (genre, games) => {
        let count = 0;
        games.forEach(game => {
            if (game.genre === genre) {
                count =+ 1;
            }
        })
        return count;
    }

    genres.forEach(genre =>  {
        let count = countGames(genre, games);
        let genreArray = [genre, count];
        genreData.push(genreArray);
    })

    return (
        <Chart chartType="PieChart" data={genreData} options={genreOptions} width={"100%"} height={"400px"}/>
    )
}

export default GenresPieChart;