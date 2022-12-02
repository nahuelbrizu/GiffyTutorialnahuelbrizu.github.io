import React, { useEffect, useState } from "react";
import getTrendingSearches from "services/GetTrendingSearches";
import  Category  from "../categorys/index";


 function TrendingSearches(){
    const [trends, setTrends] = useState([])
    useEffect (function (){
    getTrendingSearches().then(setTrends)
    }, [])

    return <Category name="Categogias" options={trends}/>
}

export default function LazyTrending() {
    const [show, setShow] = useState(false)
    
    useEffect(function(){
        const onChange = (entries) => {
            console.log(entries)
            if(entries[0].isIntersecting){
                setShow(true)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
        observer.observe(document.getElementById('lazyTrending'))
    },[])
    return <div id='lazyTrending'>
        {show ? <TrendingSearches /> : null}
    </div>
}

