import React from "react";

import BackButton from "../../Component/backTalent";
import AlunaMain from "../../Component/subComponent/AlunaP"

import { Helmet } from "react-helmet";

const Aluna = () => (
  <div>
    <Helmet>
      <title>Aluna Diva</title>
    </Helmet>
    <BackButton />
    <AlunaMain/>
  </div>
);

export default Aluna;
