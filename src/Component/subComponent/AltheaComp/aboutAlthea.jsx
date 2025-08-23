import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { getDebutAlthea } from "../../YtApi";

import "../AltheaComp/aboutAlthea.css";
import FPSEVINA from "../../../assets/FPSEVINA.png";
import FPALUNA from "../../../assets/FPALUNA.png";
import FPORIEL from "../../../assets/FPORIEL.png";
import FPMILA from "../../../assets/FPMILA.png";
import FPAIRI from "../../../assets/FPAIRI.png";
import FPSHAON from "../../../assets/FPSHAON.png";

const AboutAlthea = () => {
  const [debutAltheas, setDebutAltheas] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    getDebutAlthea().then((items) => {
      setDebutAltheas(items);
    });
  }, []);

  const DebutAlthea = debutAltheas.map((items, i) => {
    return (
      <div className="videoDebutAlthea" key={i}>
        <div className="Hatline">
          <h1 data-aos="fade-up" data-aos-duration="800">
            Debut Live
          </h1>
        </div>
        <div className="debutThumb">
          <a href="https://www.youtube.com/live/0liOrmhzT7I?si=WuSpQZH2_YbLN3P-" target="blank">
            <img src={items.snippet.thumbnails.medium.url} data-aos="fade-up" data-aos-duration="650" />
          </a>
          <div className="textDebut" data-aos="fade-up" data-aos-duration="700">
            <a href="https://www.youtube.com/live/0liOrmhzT7I?si=vLN9wnuYeEGpKw0_">{items.snippet.title}</a>
            <p>Hi!! First of all, let me introduce myself, I'm Althea Antonia, a cheerful part-timer at a detective agency who's on a secret mission to solve the cold case that changed my life forever.</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="aboutAlthea">
      <div className="Hatline">
        <h1 data-aos="fade-up" data-aos-duration="600">
          About
        </h1>
      </div>
      <div className="Lore" data-aos="fade-up" data-aos-duration="650">
        <p>Althea, setengah Jepang setengah Indonesia, lahir dari pengorbanan seorang ibu yang penuh kasih. Karena ayahnya adalah seorang pebisnis yang sibuk, Althea terjebak dalam dunianya sendiri, terpesona oleh dunia kejahatan nyata.</p>
      </div>

      {/* DEBUT VIDEO */}
      <div className="debutVideo">{DebutAlthea}</div>

      {/* FRIEND */}
      <div className="Hatline friendText" data-aos="fade-up" data-aos-duration="700">
        <h1>Friend's</h1>
      </div>
      <div className="friendsAlthea">
        <div className="friendProf" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.youtube.com/@SevinaReina" target="blank">
            <img src={FPSEVINA} width={100} />
          </a>
          <h6>Sevina Reina</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="900">
          <a href="https://www.youtube.com/@MilaDragon17" target="blank">
            <img src={FPMILA} width={100} />
          </a>
          <h6>Mila Dragon</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://www.youtube.com/@AiriAirintika" target="blank">
            <img src={FPAIRI} width={100} />
          </a>
          <h6>Airi Airintika</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1100">
          <a href="https://www.youtube.com/@AlunaDivaCh" target="blank">
            <img src={FPALUNA} width={100} />
          </a>
          <h6>Aluna Diva</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1200">
          <a href="https://www.youtube.com/@ShiraishiOriel" target="blank">
            <img src={FPORIEL} width={100} />
          </a>
          <h6>Shiraishi Oriel</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1300">
          <a href="https://www.youtube.com/@ShaonRiverB" target="blank">
            <img src={FPSHAON} width={100} />
          </a>
          <h6>Shaon River B</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutAlthea;
