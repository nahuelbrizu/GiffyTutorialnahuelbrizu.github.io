import React from "react";
import { Link } from "wouter";
import './gif.css'

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link 
      to={`/gif/${id}`} 
      className="Gif-link"
      >
        <h4>{title}</h4>
        <img
          loading="lazy"
          alt={title}
          key={id}
          src={url}
        />
      </Link>
    </div>
  )
}