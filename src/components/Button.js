import React from "react";
import { Link } from "react-router-dom";

const Button = ({ style, text, link, targetRef }) => {
    return (
        <div className="button-container">
            {targetRef === "inside" ? (
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
