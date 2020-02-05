import React from 'react';
import { Redirect } from 'react-router-dom';
import JwtHelper from '../../utils/jwtHelper';

export default class RouteToLogin extends React.Component{
    render() {
        if (!JwtHelper.getToken)
            return (
                <Redirect to="/login" />
        )
        else return (
            <Redirect to="/" />
        )
    }
}
