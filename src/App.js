import './App.css';
import React, {Component} from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Routes from "./routes";
import Navbar from "./components/Navbar/Navbar";


class App extends Component{

    render() {

        return(
            <div className={"app"}>
                <GlobalStyle/>
                <Navbar/>
                <Routes/>
            </div>
        )
    }
}

export default App;
