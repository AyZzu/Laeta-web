import React from "react";

import BackButton from "../../Component/backTalent";
// import Navbar from "../../Component/Navbar"
import MilaMain from "../../Component/subComponent/MilaP"

import { Helmet } from "react-helmet";

const Mila = () => (
  <div>
    <Helmet>
      <title>MilaDragon</title>
    </Helmet>
    <BackButton />
    <MilaMain />

  </div>
);

export default Mila;
