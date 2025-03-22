import React from "react";
import { useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";

import ItemList from "./ItemList";

import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <>
      <Header />
      <ShowCase />

      {type === "artists" || type === undefined ? (
        <ItemList title="Artists" items={7} itemsArray={artistArray} path="/artists" idPath="/artist" />
      ) : null}

      {type === "songs" || type === undefined ? (
        <ItemList title="Songs" items={14} itemsArray={songsArray} path="/songs" idPath="/song" />
      ) : null}

      {showFooter && <Footer />}
    </>
); };

export default Main;