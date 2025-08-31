import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import "../Component/Hero.css";
import heroFot from "../assets/Fotbar1.png";
import Logos from "../assets/LaetaLogos.png";
import bgHero from "../assets/FotBar2.png";
import LogoRes from "../assets/LaetaLogoD.png";

const Hero = () => {
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
    <div className="hero" id="hero">
      <div className="wrapperHero">
        <img className="heroImg" src={heroFot} data-aos="fade-up" data-aos-duration="900"/>
        <img className="heroLogo" src={Logos} data-aos="fade-up" data-aos-duration="900" data-aos-delay="200"/>
        <img className="bgHero"src={bgHero}/>
        <img className="LogoRes"src={LogoRes}/>
      </div>
    </div>
  );
};

export default Hero;
