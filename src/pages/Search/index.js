import React from "react";
import ListOfGifs from "../../components/listOfGifs";
import {useGifs} from "../../hooks/useGifs";

export default function SearchResults ({ params }) {
    const { keyword } = params
    const {loading, gifs} = useGifs({keyword})

    return <div>
        {
            loading ? <loading /> : 
            <ListOfGifs gifs={gifs} />
        }
       
    </div>

}