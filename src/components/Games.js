import React, { useState, useEffect } from "react";

import SingleNewsCard from "./SingleNewsCard";
import Header from "./Header";
import GamesNavbar from "./GamesNavbar";

const Games = () => {
    const [newsList, setNewsList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://game-hear-backend.herokuapp.com/api/gta5/news"
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

        fetchData();
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
                {/* <SingleNewsCard
                    date={new Date()}
                    header="Euu eiusmod qui dolore do duis ipsum cillum officia sit ut exercitation enim voluptate reprehenderit."
                    image={{
                        url:
                            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/a/a6/GTA_Online_61820.jpg",
                        dimensions: {
                            width: undefined,
                            height: undefined,
                        },
                    }}
                    news={[
                        "Ut ut irure laborum labore voluptate.",
                        "Quis est nostrud eiusmod anim fugiat duis enim voluptate tempor.",
                        "Fugiat aliqua non dolore excepteur do proident anim qui enim.",
                        "Ad duis nisi Lorem non qui.",
                        "Dolor non veniam reprehenderit est minim.",
                    ]}
                />
                <SingleNewsCard
                    date={new Date()}
                    header="Eu eiusmod qui dolore do duis ipsum cillum officia sit ut exercitation enim voluptate reprehenderit."
                    image={{
                        url:
                            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/a/a6/GTA_Online_61820.jpg",
                        dimensions: {
                            width: 300,
                            height: undefined,
                        },
                    }}
                    news={[
                        "Ut ut irure laborum labore voluptate.",
                        "Quis est nostrud eiusmod anim fugiat duis enim voluptate tempor.",
                        "Fugiat aliqua non dolore excepteur do proident anim qui enim.",
                        "Ad duis nisi Lorem non qui.",
                        "Dolor non veniam reprehenderit est minim.",
                    ]}
                /> */}
            </section>
        </section>
    );
};

export default Games;
