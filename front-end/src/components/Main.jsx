import React from "react";
import ItemList from "./ItemList";
import logo from "../assets/logo/logoD.png";

import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faPinterest, faYoutube, faReddit } from "@fortawesome/free-brands-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";


const Main = ({ type }) => {
  const [selected, setSelected] = useState("Home");

  return (
    <>
      <nav id="navbar">
        <div className="navbar-container">
          <Link>
            <FontAwesomeIcon icon={faBarsStaggered} style={{ fontSize: '21px' }}/>
          </Link>

          <ul className="navbar-items">
            {[{ name: "Home", path: "/" }, { name: "Categories", path: "/" }, { name: "Log In", path: "/" }].map((item) => (
              <li
                key={item.name}
                className={selected === item.name ? "active" : ""}
                onClick={() => setSelected(item.name)}
              >
                <Link to={item.path}>{item.name}</Link>
                </li>
            ))}
          </ul>
        </div>
      </nav>

      <div id="showcase">
        <div className="showcase-container">
          <h2>Music, music and music.</h2>
          <p>Bringing the world of music closer to you.</p>
          <button className="btn-prim">join us</button>
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
        <div className="footer-container">
          <div className="footer-grid">
            <div className="brand-section">
              <div className="logo-wrapper">
                <img 
                  src={logo} 
                  alt="logo do proj" 
                  className="footer-logo" 
                />
              </div>
              <p className="brand-tagline">Sound in Motion, Silence in Soul.</p>
              <div className="social-links">
                {[ faInstagram, faTiktok, faPinterest, faYoutube, faReddit ].map((icon, index) => (
                  <a key={index} href="#" className="social-link">
                    <FontAwesomeIcon icon={icon} className="social-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div className="nav-sections"> {[
                { title: 'Explore', links: [
                  "About Us", "Site Map", "Help Center", "Report a Bug", "FAQs", "Contact Us"
                ]},
                { title: 'Content', links: [
                  "Artist Interviews", "Behind-the-Scenes", "Music Downloads", "Early Access", "Live Events"
                ]},
                { title: 'Community', links: [
                  "Free Samples", "Share Music", "Meetups", "Forums", "Fan Voting"
                ]},
              ].map(({ title, links }) => (
                <div key={title} className="nav-group">
                  <h5 className="nav-title">{title}</h5>
                  <div className="nav-links">
                    {links.map(link => (
                      <a key={link} className="nav-link">{link}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="newsletter-section">
              <h5 className="newsletter-title">Stay Connected</h5>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="email-input" 
                />
                <button type="submit" className="submit-button">
                  <span className="button-text">Subscribe</span>
                  <span className="button-arrow">→</span>
                </button>
              </form>
              <div className="legal-links">{[ "Privacy", "Cookies", "Terms & Conditions" ].map(item => (
                    <a key={item} href="#" className="legal-item">{item}</a>
              ))}
              </div>
            </div>
          </div>

          <div className="copyright-bar">
            <span className="copyright-text">© 2025 DUDUPIZZAS</span>
          </div>
        </div>
      </footer>
    </>
); };

export default Main;