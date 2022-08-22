import React from "react"
import "./style.css";
import pic from "../images/meme-img.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {pic}
                className="header--image"
                alt="HeaderImage"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">A new gen Meme Generator</h4>
        </header>
    )
}