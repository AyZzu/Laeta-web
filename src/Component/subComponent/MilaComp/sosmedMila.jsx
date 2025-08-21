import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../MilaComp/sosmedMila.css";

const SosmedMila = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="sosMed" data-aos="fade-in" data-aos-duration="900">
      <h1 data-aos="fade-up" data-aos-duration="700">
        Social Media
      </h1>
      <div className="wrapperSosmed">
        <div className="YTSosmed" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.youtube.com/@MilaDragon17" target="blank">
            <button>Youtube</button>
          </a>
        </div>
        <div className="IGSosmed" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.instagram.com/miladragon153/" target="blank">
            <button>Instagram</button>
          </a>
        </div>
        <div className="XSosmed" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://x.com/Milaa_Dragon" target="blank">
            <button>X</button>
          </a>
        </div>
        <div className="TrakteerSosmed" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://teer.id/miladragon0" target="blank">
            <button>Trakteer</button>
          </a>
        </div>
        <div className="TakoSosmed" data-aos="fade-up" data-aos-duration="1200">
          <a href="https://tako.id/miladragon"  target="blank">
            <button>Tako</button>
          </a>
        </div>
        <div className="SoBuzzSosmed" data-aos="fade-up" data-aos-duration="1200" >
          <a href="https://sociabuzz.com/mila_dragon/tribe" target="blank">
            <button>SociaBuzz</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SosmedMila;
