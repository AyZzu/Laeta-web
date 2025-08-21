import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../SevinaComp/sosmedSevina.css";

const SosmedSevina = () => {
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
          <a href="https://www.youtube.com/@SevinaReina" target="blank">
            <button>Youtube</button>
          </a>
        </div>
        <div className="IGSosmed" data-aos="fade-up" data-aos-duration="800">
          <a href="https://www.instagram.com/sevinareina" target="blank">
            <button>Instagram</button>
          </a>
        </div>
        <div className="XSosmed" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://x.com/sevinareina">
            <button>X</button>
          </a>
        </div>
        <div className="TrakteerSosmed" data-aos="fade-up" data-aos-duration="1000">
          <a href="https://teer.id/sevinareina2" target="blank">
            <button>Trakteer</button>
          </a>
        </div>
        <div className="TakoSosmed" data-aos="fade-up" data-aos-duration="1200">
          <a href="https://tako.id/SevinaReina" target="blank">
            <button>Tako</button>
          </a>
        </div>
        <div className="SoBuzzSosmed" data-aos="fade-up" data-aos-duration="1200" >
          <a href="https://sociabuzz.com/sevinareina02/tribe" target="blank">
            <button>SociaBuzz</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SosmedSevina;
