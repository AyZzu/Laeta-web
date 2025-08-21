import React from "react";

import BackButton from "../../Component/backTalent";

import SevinaMain from "../../Component/subComponent/SevinaP";

import { Helmet } from "react-helmet";

const Sevina = () => (
  <div>
    <Helmet>
      <title>Sevina Reina</title>
    </Helmet>
    <BackButton />
    <SevinaMain />
  </div>
);

export default Sevina;
