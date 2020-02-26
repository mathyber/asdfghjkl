import React from "react";
import { LOGIN_LINK } from "./link";
import LoginForm from "../containers/login/login_form.jsx";
import Grid from "../containers/grid/index.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import JwtHelper from "../utils/jwtHelper";

function MainRouter() {
    return (
        <Switch>
            <Route path={LOGIN_LINK} render={() => JwtHelper.isTokenExist ?
                <Redirect to={{pathname: "/grid/orders"}} /> : <LoginForm />} />
            <PrivateRoute path="/grid/orders" component={Grid}/>
        </Switch>
    );
}

export default MainRouter