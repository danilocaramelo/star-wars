import './App.css';
import React, {Component} from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Routes from "./routes";
import Title from "./components/Title/Title";


class App extends Component{

    render() {

        return(
            <div className={"app"}>
                <GlobalStyle/>
                <Title/>
                <Routes/>
            </div>
        )
    }
}

export default App;
