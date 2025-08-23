import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "../subComponent/AlunaP.css";

// import charMila from "../../assets/Mila.png";
// import BannerMila from "../../assets/milaweb.png";

import { ProfileAluna, getVideoAluna } from "../YtApi";
import SosmedAluna from "./AlunaComp/sosmedAluna.jsx";
import VideoAlunas from "./AlunaComp/videoAluna.jsx";
import AboutAluna from "./AlunaComp/aboutAluna.jsx";

const formatNumber = (num) => {
  if (!num) return "0";
  const number = parseInt(num, 10);
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (number >= 1_000) return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return number.toString();
};

const AlunaDiva = () => {
  AOS.init({
    offset: 0,
  });
  // const [popularMila, setPopularMila] = useState([]);
  const [DataAluna, setDataAluna] = useState([]);
  const [VideoAluna, setVideoAluna] = useState([]);
  const [Video, setVideo] = useState([]);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // popularVideoMila().then((items) => {
    //   setPopularMila(items);
    // });
    ProfileAluna().then((items) => {
      setDataAluna(items);
    });
    getVideoAluna().then((items) => {
      setVideoAluna(items);
    });
    //     getVideo().then((items) => {
    //       setVideo(items);
    //     });
  }, []);

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutAluna />;
      case "video":
        return <VideoAlunas data={VideoAluna} />;
      case "stats":
        return <SosmedAluna />;
      default:
        return <AboutAluna />;
    }
  };

  const ProfileAlunaPage = DataAluna.map((items, i) => {
    return (
      <div className="wrapperMainAluna" key={i}>
        <div className="Profile">
          <div className="profKiri">
            <div className="secProf1">
              <img className="Fp" src={items.snippet.thumbnails.high.url} alt="" width={200} data-aos="fade-up" data-aos-duration="600" />
              <h2 data-aos="fade-up" data-aos-duration="650">
                Aluna Diva
              </h2>
              <p data-aos="fade-up" data-aos-duration="700">
                Luna
              </p>

              <div className="stat">
                <div className="sub">
                  <h4 data-aos="fade-up" data-aos-duration="750">
                    {formatNumber(items.statistics.subscriberCount)}
                  </h4>
                  <p data-aos="fade-up" data-aos-duration="800">
                    Subscriber
                  </p>
                </div>
                <div className="view">
                  <h4 data-aos="fade-up" data-aos-duration="850">
                    {formatNumber(items.statistics.viewCount)}
                  </h4>
                  <p data-aos="fade-up" data-aos-duration="900">
                    Views
                  </p>
                </div>
              </div>
            </div>
            <div className="secProf2" data-aos="fade-up" data-aos-duration="800">
              <div className="listProfile">
                <h2 data-aos="fade-up" data-aos-duration="850">
                  Birthday
                </h2>
                <p data-aos="fade-up" data-aos-duration="900">
                  April 8 (Aries)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="950">
                  Height
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                  160 cm (5′3″)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1050">
                  Weight
                </h2>
                <p data-aos="fade-up" data-aos-duration="1100">
                  48Kg
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1150">
                  Oshimark
                </h2>
                <p data-aos="fade-up" data-aos-duration="1200">
                  💕
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1250">
                  Debut Date
                </h2>
                <p data-aos="fade-up" data-aos-duration="1300">
                  2022, Mei 14
                </p>
              </div>
            </div>
          </div>
          <div className="profKanan">
            <div className="navBarAluna" data-aos="fade-up" data-aos-duration="600">
              <li className="listNavAluna">
                <button onClick={() => setActiveTab("about")}>About</button>
                <button onClick={() => setActiveTab("video")}>Video</button>
                <button onClick={() => setActiveTab("stats")}>Social Media</button>
              </li>
            </div>
            <div className="navComp">{renderSection()}</div>
            <div className="PageRes">
              <div className="wrapperRes">
                <AboutAluna />
                <VideoAlunas data={VideoAluna} />
                <SosmedAluna />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="AlunaMainPage">{ProfileAlunaPage}</div>;
};

export default AlunaDiva;
