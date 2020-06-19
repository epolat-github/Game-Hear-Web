import React from "react";

import Button from "./Button";
import Header from "./Header";
// import About from "./About";
// import Links from "./Links";

const About = () => {
    return (
        <section id="about-container">
            <p id="about-main">
                If you can't keep up with the last news and updates of your
                favourite games,{" "}
                <span className="inline-app-name">
                    <span>Game</span>
                    {/* {" "} */}
                    <span>Hear</span>
                </span>{" "}
                is just the right app for you.
            </p>
        </section>
    );
};

const Links = () => {
    return (
        <section id="links-container">
            <div id="nav-links">
                <Button
                    style="secondary-button"
                    text="Subscribe"
                    link="/email"
                    targetRef="inside"
                />
                <Button
                    style="primary-button"
                    text="Games"
                    link="/games"
                    targetRef="inside"
                />
            </div>
            <div id="store-links">
                <Button
                    style="google-play-button"
                    text=""
                    link="https://play.google.com/"
                    targetRef="outside"
                />
            </div>
        </section>
    );
};

const Main = () => {
    return (
        <section className="main-container grid-container">
            <Header />
            <About />
            <Links />
        </section>
    );
};

export default Main;
