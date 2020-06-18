import React from "react";
import Button from "./Button";

const Links = () => {
    return (
        <section id="links-container">
            <Button
                type="primary-button"
                text="News"
                link="https://www.google.com"
            />
            <Button
                type="secondary-button"
                text="Email Sub"
                link="https://www.google.com"
            />
            <Button
                type="google-play-button"
                text="Google Play"
                link="https://www.google.com"
            />
        </section>
    );
};

export default Links;
