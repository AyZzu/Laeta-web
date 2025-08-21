import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Component/Footer.css";

import X from "../assets/X.png";
import IG from "../assets/IG.png";
import YTB from "../assets/YTB.png";
import logo from "../assets/LaetaLogoD.png";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="footer" id="footer">
      <div className="wrapperFooter">
        <div className="textFooter">
          <div className="iconFooter">
            <a data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" href="https://www.youtube.com/@LaetaOfficial">
              <img src={YTB} width={30} />
            </a>
            <a data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" href="https://www.instagram.com/laetaofficial/">
              <img src={IG} width={30} />
            </a>
            <a data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" href="https://x.com/laetaofficial">
              <img src={X} width={30} />
            </a>
          </div>
          <img data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" src={logo} width={100} className="footerLogo" />
          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Copyright © 2025 Laeta Indonesia
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
