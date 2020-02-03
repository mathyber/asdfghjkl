import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import LoginForm from "../containers/login"

function App() {
    return (
        <Switch>
            <Route exact path="/login" component = {LoginForm}>
            </Route>
            <Route path="/">
                <h2>Home</h2>
            </Route>
        </Switch>
    );
}

export default App;