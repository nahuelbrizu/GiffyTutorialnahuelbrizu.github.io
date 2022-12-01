import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/listOfGifs";
import {useGifs} from '../../hooks/useGifs'

const POP_GIFS = ["Matrix", "Avengers", "simpsons", "argentina", "walking", "morty", "rick", "pepsi"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs({ keyword: null })
    

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`${path}search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    if(loading) return <h3>loading...</h3>
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    placeholder="search  a gif here...."
                    onChange={handleChange}
                    type='text'
                    value={keyword}
                />
                <input
                    type="submit"
                    value="Buscar"
                />
            </form>
            <h3 className="App-title"> Los Gifs Recien Buscados</h3>
                 <ListOfGifs gifs={gifs}/>
            <h3 className="App-title"> Los Gifs más Populares</h3>
            <ul>
                {POP_GIFS.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                             Gifs de {popularGif}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </>)
}