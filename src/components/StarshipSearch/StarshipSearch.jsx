import React, {useState} from "react";
import {searchStarships} from "../../service/api";
import StarshipCard from "../StarshipCard/StarshipCard";
import "./starshipsearch.css";
import Button from "@material-ui/core/Button";

export default function StarshipSearch() {

    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    function inputChange(event) {
        setInput(event.target.value)
    }

    async function callAPI(event) {
        event.preventDefault();
        const apiResponse = await searchStarships(input)
        await setSearchResults(apiResponse)
    }

    return(
        <>
            <form className={"starship-search"}>
                <input
                    className={"starship-search__input"}
                    placeholder={"Your starship here..."}
                    type={"text"}
                    onChange={inputChange}
                    value={input}
                />
                <div className={"starship-search__button"}>
                    <Button
                        variant="contained"
                        type={'submit'} onClick={callAPI}
                    >
                        Search
                    </Button>
                </div>
            </form>
            <div className={"starship-search__grid"}>
                {searchResults.map((starship, index) => <StarshipCard key={index} starship={starship}/>)}
            </div>
        </>
    )
}