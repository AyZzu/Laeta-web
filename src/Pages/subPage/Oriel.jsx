import React from "react";

import BackButton from "../../Component/backTalent";

import OrielMain from "../../Component/subComponent/OrielP";

import { Helmet } from "react-helmet";

const Sevina = () => (
  <div>
    <Helmet>
      <title>Shiraishi Oriel</title>
    </Helmet>
    <BackButton />
    <OrielMain />
  </div>
);

export default Sevina;
