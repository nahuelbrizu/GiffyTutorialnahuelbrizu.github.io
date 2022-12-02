import { API_KEY, API_URL } from "./settings"


export const fromApirResponseToGifs = response => {
    const { data = [] } = response
    if (Array.isArray(data)) {
        const gifs = data.map(img => {
            const { images, title, id } = img
            const { url } = images.downsized_medium
            return { title, id, url }
        })
        return gifs
    }
    return []
}


export default function getGifs({ keyword = "pato", limit = 100, lang = "en", offset = 0, rating = "g" } = {}) {
    const apiURL = `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApirResponseToGifs)

}