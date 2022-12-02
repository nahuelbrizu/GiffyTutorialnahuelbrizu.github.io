import {API_KEY, API_URL} from "./settings"

const fromApiResponseToGifs = response => {
    const { data = [] } = response
    return data
}


export default function getTrendingSearches() {
    const apiURL =  `${API_URL}/trending?api_key=${API_KEY}`
    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
      
}
