import React from "react";
import {Switch,Route} from 'react-router-dom';
import Home from "./pages/home";
import Player from "./components/player";

const Routes = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/player/:id" exact component={Player}/>
        </Switch>
    )
}
export default Routes;