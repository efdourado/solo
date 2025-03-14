import React from "react";
import ItemList from "./ItemList";
import logoSpotify from "../assets/logo/spotify-logo.png";
import brFlag from "../assets/brasil.png";

import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

const Main = ({ type }) => {
  const [selected, setSelected] = useState("Home");

  return (
    <>
      <nav id="navbar">
        <div className="navbar-container">
        <Link to="/">
          <img src={logoSpotify} alt="logo do Spotify" className="logo" />
        </Link>
          <ul className="navbar-items">
            {["Home", "Categories", "About us", "Log In"].map((item) => (
              <li
                key={item}
                className={`navbar-item ${selected === item ? "active" : ""}`}
                onClick={() => setSelected(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>


      <div id="showcase">
        <div className="showcase-container">
          <h2>Music, music and music.</h2>
          <p>Bringing the world of music closer to you.</p>
          <button className="btn-primary">join us</button>
        </div>
      </div>


      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artists"
          items={7}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : null}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Songs"
          items={14}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : null}


      <footer id="footer">
        <div className="footer-content">
          <img src={logoSpotify} alt="logo do spotify" className="logo"/>
          <ul className="footer-menu">
            <p>Company</p>
            <li className="footer-menu-item">About</li>
            <li className="footer-menu-item">Empregos</li>
            <li className="footer-menu-item">For the record</li>
          </ul>

          <ul className="footer-menu">
            <p>Comunidades</p>
            <li className="footer-menu-item">Para Artistas</li>
            <li className="footer-menu-item">Desenvolvedores</li>
            <li className="footer-menu-item">Marcas</li>
            <li className="footer-menu-item">Investidores</li>
            <li className="footer-menu-item">Fornecedores</li>
          </ul>

          <ul className="footer-menu">
            <p>Links</p>
            <li className="footer-menu-item">Ajuda</li>
            <li className="footer-menu-item">Player da Web</li>
            <li className="footer-menu-item">Aplicativo móvel grátis</li>
          </ul>

          <div className="socials">
            <FontAwesomeIcon icon={faInstagram} className="socials-i" />
          </div>
        </div>

        <div className="footer-info">
          <ul className="footer-info-items">
            <li className="footer-info-item">Legal</li>
            <li className="footer-info-item">Centro de Privacidade</li>
            <li className="footer-info-item">Política de privacidade</li>
            <li className="footer-info-item">Cookies</li>
            <li className="footer-info-item">Sobre anúncios</li>
          </ul>

          <div className="rights">
            <div className="country">
              <p>Brasil</p>
              <img src={brFlag} alt="Br Flag" className="br-flag"/>
            </div>
            <p>&copy; 2025 Spotify AB</p>
          </div>
        </div>
      </footer>
    </>
); };

export default Main;