import React from "react";

import BackButton from "../../Component/backTalent";
import AiriMain from "../../Component/subComponent/AiriP";

import { Helmet } from "react-helmet";

const Airi = () => (
  <div>
    <Helmet>
      <title>Mila</title>
    </Helmet>
    <BackButton />
    <AiriMain />
  </div>
);

export default Airi;
