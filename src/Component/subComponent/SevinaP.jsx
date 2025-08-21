import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos"

import "../subComponent/SevinaP.css";

// import charMila from "../../assets/Mila.png";
// import BannerMila from "../../assets/milaweb.png";

import { ProfileSevina, getVideoSevina } from "../YtApi";
import SosmedSevina from "./SevinaComp/sosmedSevina.jsx";
import VideoSevinas from "./SevinaComp/videoSevina.jsx";
import AboutSevina from "./SevinaComp/aboutSevina.jsx";

const formatNumber = (num) => {
  if (!num) return "0";
  const number = parseInt(num, 10);
  if (number >= 1_000_000) return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (number >= 1_000) return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
  return number.toString();
};

const SevinaReina = () => {


      AOS.init({
            offset:0,
      })
  // const [popularMila, setPopularMila] = useState([]);
  const [DataSevina, setDataSevina] = useState([]);
  const [VideoSevina, setVideoSevina] = useState([]);
  //   const [Video, setVideo] = useState([]);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // popularVideoMila().then((items) => {
    //   setPopularMila(items);
    // });
    ProfileSevina().then((items) => {
      setDataSevina(items);
    });
    getVideoSevina().then((items) => {
      setVideoSevina(items);
    });
    //     getVideo().then((items) => {
    //       setVideo(items);
    //     });
  }, []);

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSevina />;
      case "video":
        return <VideoSevinas data={VideoSevina} />;
      case "stats":
        return <SosmedSevina />;
      default:
        return <AboutSevina />;
    }
  };

  const ProfileSevinaPage = DataSevina.map((items, i) => {
    return (
      <div className="wrapperMainSevina" key={i}>
        <div className="Profile">
          <div className="profKiri">
            <div className="secProf1">
              <img className="Fp" src={items.snippet.thumbnails.high.url} alt="" width={200} data-aos="fade-up" data-aos-duration="600" />
              <h2 data-aos="fade-up" data-aos-duration="650">
                Sevina Reina
              </h2>
              <p data-aos="fade-up" data-aos-duration="700">
                Budhe Vina
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
                  April 11 (Aries)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="950">
                  Height
                </h2>
                <p data-aos="fade-up" data-aos-duration="1000">
                  163 cm (5′4″)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1050">
                  Weight
                </h2>
                <p data-aos="fade-up" data-aos-duration="1100">
                  53 kg (116.84 lbs)
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1150">
                  Oshimark
                </h2>
                <p data-aos="fade-up" data-aos-duration="1200">
                  🐯
                </p>
                <h2 data-aos="fade-up" data-aos-duration="1250">
                  Debut Date
                </h2>
                <p data-aos="fade-up" data-aos-duration="1300">
                  2024, April 14
                </p>
              </div>
            </div>
          </div>
          <div className="profKanan">
            <div className="navBarSevina" data-aos="fade-up" data-aos-duration="600">
              <li className="listNavSevina">
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

  return <div className="SevinaMainPage">{ProfileSevinaPage}</div>;
};

export default SevinaReina;
