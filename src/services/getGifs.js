const apiKey = "r1pOeokELhNjn8IpWrefi9wpfCjzDdlz"

export default function GetGifs({ keyword = "pato" } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
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
        })
       
}