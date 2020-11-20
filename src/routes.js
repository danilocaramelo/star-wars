import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Movies from "./views/movies";
import Planets from "./views/planets";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Movies}/>
                <Route path={"/planets"} exact component={Planets}/>
            </Switch>
        </BrowserRouter>
    )
}
