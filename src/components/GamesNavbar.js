import React, { useState } from "react";
import Button from "./Button";

const GamesNavbar = ({ games }) => {
    const [active, setActive] = useState(Math.floor(games.length / 2));

    const onClickHandler = (index) => {
        setActive(index);
    };

    return (
        <nav id="games-navbar-container">
            {games.map((gameName, index) => (
                <Button
                    style={
                        index === active ? "primary-button" : "secondary-button"
                    }
                    text={gameName}
                    link={`#${gameName}`}
                    targetRef="inside"
                    onClickHandler={() => onClickHandler(index)}
                ></Button>
            ))}
        </nav>
    );
};

export default GamesNavbar;
