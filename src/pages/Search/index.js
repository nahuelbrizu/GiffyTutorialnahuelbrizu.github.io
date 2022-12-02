import React from "react";
import ListOfGifs from "../../components/listOfGifs";
import {useGifs} from "../../hooks/useGifs";

export default function SearchResults ({ params }) {
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})

    return <div>
        {
            loading ? <h1> loading...</h1> : 
            <>
            <h3 className="App-title">
                {decodeURI(keyword)}
            </h3>
            <ListOfGifs gifs={gifs} />
            </>
        }
    </div>

}