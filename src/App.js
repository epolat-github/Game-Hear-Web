import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Links from './components/Links'
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <About />
            <Links />
        </div>
    );
};

export default App;
