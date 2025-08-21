import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { getDebutMila } from "../../YtApi";

import "../MilaComp/aboutMila.css";
import FPAIRI from "../../../assets/FPAIRI.png";
import FPSHAON from "../../../assets/FPSHAON.png";
import FPORIEL from "../../../assets/FPORIEL.png";
import FPSEVINA from "../../../assets/FPSEVINA.png";
import FPALUNA from "../../../assets/FPALUNA.png";
import FPALTHEA from "../../../assets/FPALTHEA.png";

const AboutMila = () => {
  const [debutMilas, setDebutMilas] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    getDebutMila().then((items) => {
      setDebutMilas(items);
    });
  }, []);

  const DebutMila = debutMilas.map((items, i) => {
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
            <p>Hi,travelers! its me Mila, Let our virtual adventure begin!🫧 RAWWWWWW!!!🫧 Link debut after partynya Mila rawwwwww</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="aboutMila" >
      <div className="Hatline">
        <h1 data-aos="fade-up" data-aos-duration="600">About</h1 >
      </div>
      <div className="Lore" data-aos="fade-up" data-aos-duration="650">
        <p>Mila Dragon is a female Indonesian VTuber affiliated with RancomTeam. A sea dragon who lives in caves and likes adventure.</p>
      </div>

      {/* DEBUT VIDEO */}
      <div className="debutVideo">{DebutMila}</div>

      {/* FRIEND */}
      <div className="Hatline friendText" data-aos="fade-up" data-aos-duration="700">
        <h1>Friend's</h1>
      </div>
      <div className="friendsMila">
        <div className="friendProf" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.youtube.com/@AiriAirintika" target="blank">
          <img src={FPAIRI} width={100} />
          </a>
          <h6>Airi Airintika</h6>
        </div>
        <div className="friendProf" data-aos="fade-up" data-aos-duration="900">
        <a href="https://www.youtube.com/@SevinaReina" target="blank">
          <img src={FPSEVINA} width={100} />
          </a>
          <h6>Sevina Reina</h6>
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

export default AboutMila;
