import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import LoginForm from "../containers/login/login_form.jsx"
import RouteToLogin from "./RouteToLogin/index.jsx";
import Header from "../containers/header/index.jsx";

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