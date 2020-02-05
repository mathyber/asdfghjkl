import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import LoginForm from "../containers/login"
import RouteToLogin from "./RouteToLogin";
import Header from "./Header";

function App() {
    return (
        <Switch>
            <Route exact path = "/">
                <RouteToLogin />
                <Header />
            </Route>
            <Route exact path = "/login" component = { LoginForm } />
        </Switch>
    );
}

export default App;