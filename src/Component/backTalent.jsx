import React from "react";

import { Link } from "react-router-dom";

import "./backTalent.css";

import back from "../assets/back.png"

const backTalent = () => (
  <div className="backTalent">
    <div className="wrapperBack">
        <Link to="/" >
          <img src={back} width={35} className="backButton"/>
        </Link>
    </div>
  </div>
);

export default backTalent;
