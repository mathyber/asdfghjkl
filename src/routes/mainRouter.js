import React from "react";
import { LOGIN_LINK } from "./link";
import LoginForm from "../containers/login/login_form.jsx";
import Header from "../containers/header/index.jsx";
import {Redirect, Route, Switch} from "react-router-dom";
import PrivateRoute from "./privateRoute";
import JwtHelper from "../utils/jwtHelper";

function MainRouter() {
    return (
        <Switch>
            <Route path={LOGIN_LINK} render={() => JwtHelper.token ? <Redirect to={{pathname: "/"}} /> : <LoginForm />} />
            <PrivateRoute path="/" component={Header}/>
        </Switch>
    );
}

export default MainRouter