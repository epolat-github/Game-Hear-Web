import React, { useState, useEffect } from "react";

import SingleNewsCard from "./SingleNewsCard";
import Header from "./Header";
import GamesNavbar from "./GamesNavbar";

const Games = () => {
    const [newsList, setNewsList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async (count) => {
        try {
            const response = await fetch(
                `https://game-hear-backend.herokuapp.com/api/gta5/news/${count}`
            );
            if (!response.ok) {
                throw new Error("Network response is not OK.");
            }
            const data = await response.json();
            setIsLoaded(true);
            setNewsList(data);
        } catch (err) {
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    // initial fetching
    useEffect(() => {
        fetchData(1);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <section className="games-container">
            <Header />
            <GamesNavbar games={["Valorant", "GTA5", "LoL"]} />
            <section className="cards-container">
                {newsList.map((news) => (
                    <SingleNewsCard
                        key={Math.random().toString()}
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
            <button
                className="primary-button more-button"
                onClick={() => fetchData(newsList.length + 3)}
            >
                More
            </button>
        </section>
    );
};

export default Games;
