import React from "react";
import { Link } from "react-router-dom";

const Button = ({ style, text, link, targetRef, onClickHandler }) => {
    return (
        <div className="button-container">
            {targetRef === "inside" ? (
                <Link to={link}>
                    <button className={style} onClick={onClickHandler}>
                        {text}
                    </button>
                </Link>
            ) : (
                <a href={link} target="_blank">
                    <button className={style} onClick={onClickHandler}>
                        {text}
                    </button>
                </a>
            )}
        </div>
    );
};

export default Button;
