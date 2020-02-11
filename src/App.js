import React from 'react';
import { BrowserRouter } from "react-router-dom";

import MainRouter from "./routes";

class App extends React.Component {
    render() {
        return (
            <div>
                    <MainRouter/>
            </div>
        )
    }
}
export default App