import React, {  useState } from 'react'

const GifsContexts = React.createContext({})

export function GifsContextsProvider({children}) {
const [gifs, setGifs] = useState([])
    return <GifsContexts.Provider value={{gifs, setGifs}}>
        {children}
        </ GifsContexts.Provider>

}
export default GifsContexts