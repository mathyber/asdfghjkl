import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import LoginForm from "../containers/login"
import RouteToLogin from "./RouteToLogin";
import Header from "../containers/header";

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