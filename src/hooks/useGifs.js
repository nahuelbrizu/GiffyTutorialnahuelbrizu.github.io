import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs';
import GifsContexts from '../context/GifsContext';

export  function useGifs({ keyword } = {keyword: null}) {
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(GifsContexts)

    useEffect(function () {
        setLoading(true)
        const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') || 'random'

        getGifs( {keyword:  keywordToUse} )
            .then( gif => {
              setGifs(gif)
              setLoading(false)
              localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])
    
    return { loading, gifs }
}
