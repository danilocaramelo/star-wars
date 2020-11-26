import React, {useState} from "react";
import {searchStarships} from "../../api/api";
import StarshipCard from "../StarshipCard/StarshipCard";

export default function StarshipSearch() {

    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    function inputChange(event) {
        setInput(event.target.value)
    }

    async function callAPI() {
        const apiResponse = await searchStarships(input)
        await setSearchResults(apiResponse)
    }

    return(
        <>
            <input
                type={"text"}
                onChange={inputChange}
                value={input}
            />
            <button type={'submit'} onClick={callAPI}>Serach</button>
            {searchResults.map((starship, index) => <StarshipCard key={index} starship={starship}/>)}
        </>
    )
}