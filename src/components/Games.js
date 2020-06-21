import React from "react";

import SingleNewsCard from "./SingleNewsCard";
import Header from "./Header";

const Games = () => {
    return (
        <section>
            <Header />
            <h1>Games</h1>
            <SingleNewsCard
                date={new Date}
                header="Eu eiusmod qui dolore do duis ipsum cillum officia sit ut exercitation enim voluptate reprehenderit."
                image="https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/a/a6/GTA_Online_61820.jpg"
                news={[
                    "Ut ut irure laborum labore voluptate.",
                    "Quis est nostrud eiusmod anim fugiat duis enim voluptate tempor.",
                    "Fugiat aliqua non dolore excepteur do proident anim qui enim.",
                    "Ad duis nisi Lorem non qui.",
                    "Dolor non veniam reprehenderit est minim.",
                ]}
            />
        </section>
    );
};

export default Games;
