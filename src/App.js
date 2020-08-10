import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./styles/Main.scss";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Header from "./fragments/Header";
import Footer from "./fragments/Footer";

export default function App() {
    return (
        <Router>
            <Header/>
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Index/>
                    </Route>
                    <Route path="/news">
                        <Pricing/>
                    </Route>
                    <Route path="/forum">
                        <Pricing/>
                    </Route>
                    <Route path="/preise">
                        <Pricing/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}