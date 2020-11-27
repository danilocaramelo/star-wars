import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Movies from "./views/movies";
import Planets from "./views/planets";
import Starships from "./views/starships";
import Introduction from "./views/introduction";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact component={Introduction}/>
                <Route path={"/movies"} exact component={Movies}/>
                <Route path={"/planets"} exact component={Planets}/>
                <Route path={"/starships"} exact component={Starships}/>
            </Switch>
        </BrowserRouter>
    )
}
