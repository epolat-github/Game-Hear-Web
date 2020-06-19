import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <header id="header-main">
            <Link to="/">
                <img id="logo-header" src={Logo}></img>
            </Link>
        </header>
    );
};

export default Header;
