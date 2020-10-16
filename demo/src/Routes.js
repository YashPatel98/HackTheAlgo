  
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Algorithms from "./Algorithms/Algorithms";
import Lcs from "./Algorithms/Lcs/Lcs";
import KruskalInput from "./Algorithms/Kruskal/Kruskalinput"
import Fibonacci from "./Algorithms/Fibonacci/Fibonacci"
import history from './History';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Algorithms" component={Algorithms}/>
                    <Route path="/Lcs" component={Lcs}/>
                    <Route path="/Kruskal" component={KruskalInput}/>
                    <Route path="/Fibonacci" component={Fibonacci}/>
                </Switch>
            </Router>
        )
    }
}