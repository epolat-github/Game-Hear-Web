import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Games from "./components/Games";
import EmailSub from "./components/EmailSub";

import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/games">
                    <Games />
                </Route>
                <Route exact path="/email">
                    <EmailSub />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
