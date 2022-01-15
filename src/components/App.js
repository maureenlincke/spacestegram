import { Router, Route } from "express";
import React from "react";
import Home from "./Home";

const App = () => {
    return (
        <Router>
            <div>
                <Route path='/' render={(routeProps) => <Home {...routeProps} />}/>
            </div>
        </Router>
    )
}

export default App;