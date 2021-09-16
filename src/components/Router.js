import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../router/Home';
import Header from './Header';
import Profile from './../router/Profile'

const AppRouter = () => {
    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Profile">
                    <Profile/>
                </Route>
            </Switch>
        </Router>
       
    )
}

export default AppRouter;