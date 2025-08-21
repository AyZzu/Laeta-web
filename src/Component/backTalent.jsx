import React from "react";

import { Link } from "react-router-dom";

import "./backTalent.css";

const backTalent = () => (
  <div className="backTalent">
    <div className="wrapperBack">
      <ul>
        <Link to="/" className="button">
          Back
        </Link>
      </ul>
    </div>
  </div>
);

export default backTalent;
