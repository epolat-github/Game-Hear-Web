import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <header id="header-main">
            <img id="logo-header" src={Logo}></img>
        </header>
    );
};

export default Header;
