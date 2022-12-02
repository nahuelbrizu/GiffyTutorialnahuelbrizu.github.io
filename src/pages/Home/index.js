import React, { useState } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "components/listOfGifs";
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from "components/TrendingSearches"
import Spinner from "components/spinner";


export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs({ keyword: null })


    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`${path}search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    if (loading) return <Spinner/>
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
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title"> Los Gifs Recien Buscados</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
            </div>
            <div className="App-category">
                    <TrendingSearches />
            </div>
        </>)
}