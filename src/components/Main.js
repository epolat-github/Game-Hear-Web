import React from "react";

import Button from "./Button";
import Header from "./Header";
// import About from "./About";
// import Links from "./Links";

const About = () => {
    return (
        <section id="about-container">
            <p id="about-main">
                Laborum enim duis labore consectetur nostrud officia qui
                cupidatat sint quis incididunt aliqua. Qui nulla mollit duis
                aliquip ipsum exercitation et nulla Lorem veniam proident nulla
                nostrud. Qui ea in sit irure. Voluptate est nisi aliqua amet
                sunt est esse quis cupidatat veniam. Cupidatat laborum nisi
                Lorem aliqua voluptate.
            </p>
        </section>
    );
};

const Links = () => {
    return (
        <section id="links-container">
            <Button
                type="primary-button"
                text="Games"
                link="/games"
                type="inside"
            />
            <Button
                type="secondary-button"
                text="Email Sub"
                link="/email"
                type="inside"
            />
            <Button
                type="google-play-button"
                text="Google Play"
                link="https://play.google.com/"
                type="outside"
            />
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
