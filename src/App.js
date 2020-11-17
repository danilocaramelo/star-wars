import './App.css';
import {Component} from "react";
import FilmList from "./components/FilmList/FilmList";

class App extends Component{

    render() {

        return(
            <div>
                <FilmList/>
            </div>
        )
    }
}

export default App;
