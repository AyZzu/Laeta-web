import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import "../Component/About.css";
import imgAbout from "../assets/Fotbar2.png";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
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
    <div className="about" id="about">
      <h1 className="aboutTextHead" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">About Us</h1>
      <div className="wrapperAbout">
        <img className="aboutImg"src={imgAbout} data-aos="fade-up" data-aos-duration="900" data-aos-delay="300" />
        <div className="textAbout kanit-regular" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500"><p>Laeta adalah agensi VTuber yang berbasis di Indonesia, yang menaungi berbagai talenta virtual dengan karakter unik dan kreatif. Sejak didirikan, Laeta telah berhasil menarik puluhan ribu penggemar dari seluruh penjuru Indonesia berkat konten hiburan yang menarik seperti live streaming, cover lagu, dan kolaborasi kreatif.</p></div>
      </div>
    </div>
  );
};

export default About;
