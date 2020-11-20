import './App.css';
import React, {Component} from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Routes from "./routes";
import Header from "./components/Header/Header";


class App extends Component{

    render() {

        return(
            <div className={"app"}>
                <GlobalStyle/>
                <Header/>
                <Routes/>
            </div>
        )
    }
}

export default App;
