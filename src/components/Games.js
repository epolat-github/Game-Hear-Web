import React, { useState, useEffect } from "react";

import SingleNewsCard from "./SingleNewsCard";
import Header from "./Header";
import GamesNavbar from "./GamesNavbar";

const Games = () => {
    const gamesList = ["Valorant", "GTA5", "LoL"];
    const [newsList, setNewsList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeGameIndex, setActiveGameIndex] = useState(
        Math.floor(gamesList.length / 2)
    );

    const fetchData = async (count) => {
        try {
            const response = await fetch(
                `https://game-hear-backend.herokuapp.com/api/${gamesList[activeGameIndex]}/news/${count}`
            );
            if (!response.ok) {
                throw new Error("Network response is not OK.");
            }
            const data = await response.json();
            // setTimeout(() => {
            setIsLoaded(true);
            setNewsList(data);
            // }, 300);
        } catch (err) {
            // setTimeout(() => {
            console.log(err);
            setIsLoaded(true);
            setError(err);
            // }, 300);
        }
    };

    useEffect(() => {
        let count;

        // initial fetch
        if (newsList.length == 0) {
            count = 1;
        }
        // "load more" fetches
        else {
            count = newsList.length + 3;
        }

        fetchData(count);

        // cleanup
        return () => {
            setIsLoaded(false);
            setNewsList([]);
            setError(null);
        };
    }, [activeGameIndex]);

    return (
        <section className="games-container">
            <Header />
            <GamesNavbar
                games={gamesList}
                activeGameIndex={activeGameIndex}
                changeActiveIndex={setActiveGameIndex}
            />
            {!isLoaded && <div className="loading">Loading...</div>}
            {!error && (
                <section className="cards-container">
                    {newsList.map((news, index) => (
                        <SingleNewsCard
                            key={`card${index}`}
                            date={new Date(news.newDate)}
                            header={news.newHeader}
                            image={{
                                url: news.images[0],
                                dimensions: {
                                    width: undefined,
                                    height: undefined,
                                },
                            }}
                            news={news.news}
                        />
                    ))}
                </section>
            )}
            {error && (
                <div className="error-container">
                    <p>This game is not ready or there's an internal error.</p>
                </div>
            )}
            {isLoaded && !error && (
                <button
                    className="primary-button more-button"
                    onClick={() => fetchData(newsList.length + 3)}
                >
                    More
                </button>
            )}
        </section>
    );
};

export default Games;
