import React from 'react';
import { BrowserRouter } from "react-router-dom";

import MainRouter from "./routes";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MainRouter/>
                </BrowserRouter>
            </div>
        )
    }
}
export default App