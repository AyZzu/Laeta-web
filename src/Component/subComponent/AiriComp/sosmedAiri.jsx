import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../AiriComp/sosmedAiri.css";

const SosmedAiri = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="sosMed" data-aos="fade-in" data-aos-duration="900">
      <h1 data-aos="fade-up" data-aos-duration="700">
        Recent Video
      </h1>
      <div className="wrapperSosmed">
        <div className="YTSosmed" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.youtube.com/@AiriAirintika" target="blank">
            <button>Youtube</button>
          </a>
        </div>
        <div className="IGSosmed" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.instagram.com/airiairintika" target="blank">
            <button>Instagram</button>
          </a>
        </div>
        <div className="XSosmed" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://x.com/airiairintika">
            <button>X</button>
          </a>
        </div>
        <div className="TrakteerSosmed" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://teer.id/AiriAirintika2" target="blank">
            <button>Trakteer</button>
          </a>
        </div>
        <div className="TakoSosmed" data-aos="fade-up" data-aos-duration="1200">
          <a href="https://tako.id/AiriAirintika" target="blank">
            <button>Tako</button>
          </a>
        </div>
        <div className="SoBuzzSosmed" data-aos="fade-up" data-aos-duration="1200" >
          <a href="https://sociabuzz.com/airiairintika02/" target="blank">
            <button>SociaBuzz</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SosmedAiri;
