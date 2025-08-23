import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import "../subComponent/ShaonP.css";

// import charMila from "../../assets/Mila.png";
// import BannerMila from "../../assets/milaweb.png";

import { ProfileShaon, getVideoShaon } from "../YtApi";
import SosmedShaon from "./ShaonComp/sosmedShaon.jsx";
import VideoShaons from "./ShaonComp/videoShaon.jsx";
import AboutShaon from "./ShaonComp/aboutShaon.jsx";

const formatNumber = (num) => {
  if (!num) return "0";
  const number = parseInt(num, 10);
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (number >= 1_000) return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return number.toString();
};

const ShaonRiverB = () => {
  AOS.init({
    offset: 0,
  });
  // const [popularMila, setPopularMila] = useState([]);
  const [DataShaon, setDataShaon] = useState([]);
  const [VideoShaon, setVideoShaon] = useState([]);
  //   const [Video, setVideo] = useState([]);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // popularVideoMila().then((items) => {
    //   setPopularMila(items);
    // });
    ProfileShaon().then((items) => {
      setDataShaon(items);
    });
    getVideoShaon().then((items) => {
      setVideoShaon(items);
    });
    //     getVideo().then((items) => {
    //       setVideo(items);
    //     });
  }, []);

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutShaon />;
      case "video":
        return <VideoShaons data={VideoShaon} />;
      case "stats":
        return <SosmedShaon />;
      default:
        return <AboutShaon />;
    }
  };

  const ProfileShaonPage = DataShaon.map((items, i) => {
    return (
      <div className="wrapperMainShaon" key={i}>
        <div className="Profile">
          <div className="profKiri">
            <div className="secProf1">
              <img className="Fp" src={items.snippet.thumbnails.high.url} alt="" width={200} data-aos="fade-up" data-aos-duration="600" />
              <h2 data-aos="fade-up" data-aos-duration="650">
                Shaon River B
              </h2>
              <p data-aos="fade-up" data-aos-duration="700">
                El Yapping
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
                  March 13 (Pieces)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="950">
                  Height
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                  169 cm (5′6″)
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
                  🖤
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
            <div className="navBarShaon" data-aos="fade-up" data-aos-duration="600">
              <li className="listNavShaon">
                <button onClick={() => setActiveTab("about")}>About</button>
                <button onClick={() => setActiveTab("video")}>Video</button>
                <button onClick={() => setActiveTab("stats")}>Social Media</button>
              </li>
            </div>
            <div className="navComp">{renderSection()}</div>
            <div className="PageRes">
              <div className="wrapperRes">
                <AboutShaon />
                <VideoShaons data={VideoShaon} />
                <SosmedShaon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ShaonMainPage">{ProfileShaonPage}</div>;
};

export default ShaonRiverB;
