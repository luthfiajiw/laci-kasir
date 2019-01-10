import React, { Component } from 'react';
import Dashboard from "./Dashboard"
import { Switch, Route } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Switch>
                <Route path="/home" component={Dashboard}/>
                </Switch>
            </div>
        );
    }
}

export default Home;