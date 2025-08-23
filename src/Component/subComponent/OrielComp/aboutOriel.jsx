import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { getDebutOriel } from "../../YtApi";

import "../OrielComp/aboutOriel.css";
import FPSEVINA from "../../../assets/FPSEVINA.png";
import FPALUNA from "../../../assets/FPALUNA.png";
import FPSHAON from "../../../assets/FPSHAON.png";
import FPMILA from "../../../assets/FPMILA.png";
import FPAIRI from "../../../assets/FPAIRI.png";
import FPALTHEA from "../../../assets/FPALTHEA.png";

const AboutOriel = () => {
  const [debutOriels, setDebutOriels] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    getDebutOriel().then((items) => {
      setDebutOriels(items);
    });
  }, []);

  const DebutOriel = debutOriels.map((items, i) => {
    return (
      <div className="videoDebutOriels" key={i}>
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
            <p>Greetings! I'm Shiraishi Oriel a former duchess who fell from grace but rose again as an office lady with impeccable taste in 2D gentlemen and an unshakeable sense of superiority</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="aboutOriel">
      <div className="Hatline">
        <h1 data-aos="fade-up" data-aos-duration="600">
          About
        </h1>
      </div>
      <div className="Lore" data-aos="fade-up" data-aos-duration="650">
        <p>Shiraishi Oriel, seorang mantan duchess yang jatuh dari kekuasaan tetapi bangkit kembali sebagai seorang pegawai kantor dengan selera yang sempurna terhadap pria 2D dan rasa superioritas yang tak tergoyahkan.</p>
      </div>

      {/* DEBUT VIDEO */}
      <div className="debutVideo">{DebutOriel}</div>

      {/* FRIEND */}
      <div className="Hatline friendText" data-aos="fade-up" data-aos-duration="700">
        <h1>Friend's</h1>
      </div>
      <div className="friendsOriel">
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
          <a href="https://www.youtube.com/@ShaonRiverB" target="blank">
            <img src={FPSHAON} width={100} />
          </a>
          <h6>Shaon River B</h6>
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

export default AboutOriel;
