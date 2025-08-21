import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "../subComponent/MilaP.css";

// import charMila from "../../assets/Mila.png";
// import BannerMila from "../../assets/milaweb.png";

import { ProfileMila, getVideoMila } from "../YtApi";
import SosmedMila from "./MilaComp/sosmedMila.jsx";
import VideoMilas from "../subComponent/MilaComp/videoMila.jsx";
import AboutMila from "../subComponent/MilaComp/aboutMila.jsx";

const formatNumber = (num) => {
  if (!num) return "0";
  const number = parseInt(num, 10);
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (number >= 1_000) return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return number.toString();
};

const MilaDragon = () => {
  AOS.init({ offset: 0 });
  // const [popularMila, setPopularMila] = useState([]);
  const [DataMila, setDataMila] = useState([]);
  const [VideoMila, setVideoMila] = useState([]);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // popularVideoMila().then((items) => {
    //   setPopularMila(items);
    // });
    ProfileMila().then((items) => {
      setDataMila(items);
    });
    getVideoMila().then((items) => {
      setVideoMila(items);
    });
  }, []);

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutMila />;
      case "video":
        return <VideoMilas data={VideoMila} />;
      case "stats":
        return <SosmedMila />;
      default:
        return <AboutMila />;
    }
  };

  const ProfileMilaPage = DataMila.map((items, i) => {
    return (
      <div className="wrapperMainMila" key={i}>
        <div className="Profile">
          <div className="profKiri">
            <div className="secProf1">
              <img className="Fp" src={items.snippet.thumbnails.high.url} alt="" width={200} data-aos="fade-up" data-aos-duration="600" />
              <h2 data-aos="fade-up" data-aos-duration="650">
                Mila Dragon
              </h2>
              <p data-aos="fade-up" data-aos-duration="700">
                Tante Mila
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
                  January 17 (Capricorn)
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
                  50 kg (110.23 lbs)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1150">
                  Oshimark
                </h2>
                <p data-aos="fade-up" data-aos-duration="1200">
                  🌊
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1250">
                  Debut Date
                </h2>
                <p data-aos="fade-up" data-aos-duration="1300">
                  2023, December 22
                </p>
              </div>
            </div>
          </div>
          <div className="profKanan">
            <div className="navBarMila" data-aos="fade-up" data-aos-duration="600">
              <li className="listNavMila">
                <button onClick={() => setActiveTab("about")}>About</button>
                <button onClick={() => setActiveTab("video")}>Video</button>
                <button onClick={() => setActiveTab("stats")}>Social Media</button>
              </li>
            </div>
            <div className="navComp">{renderSection()}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="MilaMainPage">{ProfileMilaPage}</div>;
};

export default MilaDragon;
