import React from "react"
import "./Home.css";
import Logo from "./za yahaw bi.jpg"
import GitHub from "./icons8-github.svg";
import Instagram from "./icons8-instagram.svg";
import SoundCloud from "./icons8-soundcloud.svg";
import Medium from "./icons8-medium-7.svg"

export default function Home() {
    return (
        <div className="main_container">
            <img src={Logo} alt="My pic" />
            <h1>Artistry</h1>
            <p>artistry449@gmail.com</p>
            <div className="links_container">
                <a href="https://www.instagram.com/artistry_449/"><img src={Instagram} alt="Instagram logo" /></a>
                <a href="https://github.com/Artistry449"><img src={GitHub} alt="GitHub logo" /></a>
                <a href="https://medium.com/@ganboldenkhbayar0823"><img src={Medium} alt="Medium logo" /></a>
                <a href="https://soundcloud.com/nkhpg"><img src={SoundCloud} alt="SoundCloud logo" /></a>
            </div>
        </div>
    )
}