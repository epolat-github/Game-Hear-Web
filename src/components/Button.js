import React from "react";
import { Link } from "react-router-dom";

const Button = ({ style, text, link, type }) => {
    return (
        <div className="buttonContainer">
            {type === "inside" ? (
                <Link to={link}>
                    <button className={style}>{text}</button>
                </Link>
            ) : (
                <a href={link} target="_blank">
                    <button className={style}>{text}</button>
                </a>
            )}
        </div>
    );
};

export default Button;
