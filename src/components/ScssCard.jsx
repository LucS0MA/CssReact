import { IoIosStarOutline } from "react-icons/io";
import logo from "../assets/logo2.png";
import React from 'react';
import './ScssCard.scss';

const ScssCard = () => {
  return (
    <>
    <div className="Container">
        <div className="HeadDisplay">
      <img src={logo} alt="Logo" className="Logo" />
      <div className="RightDisplay">
      <h1 className="Title">CUBE 2023 </h1>
      <p className="RateHead">Rate this album : </p>
      <div className="Stars">
        <IoIosStarOutline className="star"/>
        <IoIosStarOutline className="star"/>
        <IoIosStarOutline className="star"/>
        <IoIosStarOutline className="star"/>
        <IoIosStarOutline className="star"/>
        </div>
      </div>
      </div>
      <div className="Ligne"></div>
      <p className="Desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio
        accusantium quaerat vero, eveniet odit autem! Voluptates consequatur
        minus praesentium.
      </p>
      <p className="LilDesc">Brand protected by nobody since idk ®</p>
      </div>
    </>
  );
};

export default ScssCard;
