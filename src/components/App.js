import React from 'react';
import { Router, Switch } from "react-router-dom";

import MainRouter from "../router";

function App() {

    return (
        <Switch>
            <MainRouter/>
        </Switch>
    );
}

export default App;