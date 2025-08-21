import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { getDebutAiri } from "../../YtApi";

import "../AiriComp/aboutAiri.css";
import FPSEVINA from "../../../assets/FPSEVINA.png";
import FPSHAON from "../../../assets/FPSHAON.png";
import FPORIEL from "../../../assets/FPORIEL.png";
import FPMILA from "../../../assets/FPMILA.png";
import FPALUNA from "../../../assets/FPALUNA.png";
import FPALTHEA from "../../../assets/FPALTHEA.png";

const AboutAiri = () => {
  const [debutAiris, setDebutAiris] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    getDebutAiri().then((items) => {
      setDebutAiris(items);
    });
  }, []);

  const DebutAiri = debutAiris.map((items, i) => {
    return (
      <div className="videoDebutMila" key={i}>
        <div className="Hatline">
          <h1 data-aos="fade-up" data-aos-duration="800">Debut Live</h1>
        </div>
        <div className="debutThumb">
          <a href="https://www.youtube.com/live/0liOrmhzT7I?si=WuSpQZH2_YbLN3P-" target="blank">
          <img src={items.snippet.thumbnails.medium.url} data-aos="fade-up" data-aos-duration="650"/>
          </a>
          <div className="textDebut" data-aos="fade-up" data-aos-duration="700">
            <a href="https://www.youtube.com/live/0liOrmhzT7I?si=vLN9wnuYeEGpKw0_">{items.snippet.title}</a>
            <p>Putri Kerajaan Undine yang bermimpi menjadi seorang idola untuk menyampaikan kebahagiaan kepada dunia</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="aboutAiri" >
      <div className="Hatline">
        <h1 data-aos="fade-up" data-aos-duration="600">About</h1 >
      </div>
      <div className="Lore" data-aos="fade-up" data-aos-duration="650">
        <p>Seorang alkemis yang sangat pandai meracik obat, tetapi suatu hari dia meminum ramuan yang salah dan berubah menjadi harimau.</p>
      </div>

      {/* DEBUT VIDEO */}
      <div className="debutVideo">{DebutAiri}</div>

      {/* FRIEND */}
      <div className="Hatline" data-aos="fade-up" data-aos-duration="700">
        <h1>Friend's</h1>
      </div>
      <div className="friends">
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
        <a href="https://www.youtube.com/@AlunaDivaCh" target="blank">
          <img src={FPALUNA} width={100} />
          </a>
          <h6>Aluna Diva</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1100">
        <a href="https://www.youtube.com/@ShaonRiverB" target="blank">
          <img src={FPSHAON} width={100} />
          </a>
          <h6>Shaon River B</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1200">
        <a href="https://www.youtube.com/@ShiraishiOriel" target="blank">
          <img src={FPORIEL} width={100} />
          </a>
          <h6>Shiraishi Oriel</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="1300">
        <a href="https://www.youtube.com/@AltheaAntonia" target="blank">
          <img src={FPALTHEA} width={100} />
          </a>
          <h6>Althea Antonia</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutAiri;
