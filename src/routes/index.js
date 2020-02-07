import React from "react";
import { LOGIN_LINK } from "./link";
import LoginForm from "../containers/login/login_form.jsx";
import Header from "../containers/header/index.jsx";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute.js";

function MainRouter() {
    return (
        <Switch>
            <Route path={LOGIN_LINK} component={LoginForm}/>
            <PrivateRoute path="/" component={Header}/>
        </Switch>
    );
}

export default MainRouter