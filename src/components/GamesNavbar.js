import React, { useState } from "react";
import Button from "./Button";

const GamesNavbar = ({ games, activeGameIndex, changeActiveIndex }) => {

    return (
        <nav id="games-navbar-container">
            {games.map((gameName, index) => (
                <Button
                    key={`${gameName}Card`}
                    style={
                        index === activeGameIndex
                            ? "primary-button"
                            : "secondary-button"
                    }
                    text={gameName}
                    link={`#${gameName}`}
                    targetRef="inside"
                    onClickHandler={() => changeActiveIndex(index)}
                ></Button>
            ))}
        </nav>
    );
};

export default GamesNavbar;
