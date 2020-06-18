import React from "react";

const Button = ({ style, text, link }) => {
    return (
        <div className="buttonContainer">
            <a href={link}>
                <button className={style}>{text}</button>
            </a>
        </div>
    );
};

export default Button;
