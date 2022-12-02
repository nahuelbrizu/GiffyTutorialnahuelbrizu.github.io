import React from 'react'
import {Link} from 'wouter'

export default function Category({name, options = {}}){
    
    return <div>
        <h3 className="App-title">{decodeURI(name)}</h3>
        <ul>
            {options.map((singleOption) => (
                <li key={singleOption.title}>
                    <Link to={`/search/${singleOption.title}`}>{singleOption.title}</Link>
                </li>
            ))}
        </ul>
    </div>
}