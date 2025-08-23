import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "../subComponent/AltheaP.css";

// import charMila from "../../assets/Mila.png";
// import BannerMila from "../../assets/milaweb.png";

import { ProfileAlthea, getVideoAlthea } from "../YtApi";
import SosmedAlthea from "./AltheaComp/sosmedAlthea.jsx";
import VideoAltheas from "./AltheaComp/videoAlthea.jsx";
import AboutAlthea from "./AltheaComp/aboutAlthea.jsx";

const formatNumber = (num) => {
  if (!num) return "0";
  const number = parseInt(num, 10);
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (number >= 1_000) return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return number.toString();
};

const AltheaAntonia = () => {
  AOS.init({
    offset: 0,
  });
  // const [popularMila, setPopularMila] = useState([]);
  const [DataAlthea, setDataAlthea] = useState([]);
  const [VideoAlthea, setVideoAlthea] = useState([]);
  //   const [Video, setVideo] = useState([]);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // popularVideoMila().then((items) => {
    //   setPopularMila(items);
    // });
    ProfileAlthea().then((items) => {
      setDataAlthea(items);
    });
    getVideoAlthea().then((items) => {
      setVideoAlthea(items);
    });
    //     getVideo().then((items) => {
    //       setVideo(items);
    //     });
  }, []);

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutAlthea />;
      case "video":
        return <VideoAltheas data={VideoAlthea} />;
      case "stats":
        return <SosmedAlthea />;
      default:
        return <AboutAlthea />;
    }
  };

  const ProfileAltheaPage = DataAlthea.map((items, i) => {
    return (
      <div className="wrapperMainAlthea" key={i}>
        <div className="Profile">
          <div className="profKiri">
            <div className="secProf1">
              <img className="Fp" src={items.snippet.thumbnails.high.url} alt="" width={200} data-aos="fade-up" data-aos-duration="600" />
              <h2 data-aos="fade-up" data-aos-duration="650">
                Althea Antonia
              </h2>
              <p data-aos="fade-up" data-aos-duration="700">
                Yakult
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
                  November 5 (Libra)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="950">
                  Height
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                  149 cm (4′10″)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1050">
                  Weight
                </h2>
                <p data-aos="fade-up" data-aos-duration="1100">
                  Classfied
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1150">
                  Oshimark
                </h2>
                <p data-aos="fade-up" data-aos-duration="1200">
                  🧭
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1250">
                  Debut Date
                </h2>
                <p data-aos="fade-up" data-aos-duration="1300">
                  2025, July 26
                </p>
              </div>
            </div>
          </div>
          <div className="profKanan">
            <div className="navBarAlthea" data-aos="fade-up" data-aos-duration="600">
              <li className="listNavAlthea">
                <button onClick={() => setActiveTab("about")}>About</button>
                <button onClick={() => setActiveTab("video")}>Video</button>
                <button onClick={() => setActiveTab("stats")}>Social Media</button>
              </li>
            </div>
            <div className="navComp">{renderSection()}</div>
            <div className="PageRes">
              <div className="wrapperRes">
                <AboutAlthea />
                <VideoAltheas data={VideoAlthea} />
                <SosmedAlthea />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="AltheaMainPage">{ProfileAltheaPage}</div>;
};

export default AltheaAntonia;
