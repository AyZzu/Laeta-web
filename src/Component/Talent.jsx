import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../Component/Talent.css";

import Mila from "../assets/Mila.png";
import Sevina from "../assets/Sevina.png";
import Airi from "../assets/Airi.png";
import Aluna from "../assets/Aluna.png";
import Shaon from "../assets/Shaon.png"
import Althea from "../assets/Althea.png"
import Oriel from "../assets/Oriel.png"

import MilaLogo from "../assets/MilaLogo.png";
import SevinaLogo from "../assets/SevinaLogo.png";
import AiriLogo from "../assets/AiriLogo.png";
import AlunaLogo from "../assets/AlunaLogo.png";
import ShaonLogo from "../assets/ShaonLogo.png";
import AltheaLogo from "../assets/AltheaLogo.png";
import OrielLogo from "../assets/OrielLogo.png";
// import { i } from "motion/react-client";

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const Talent = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({});
    // AOS.refresh();

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="talent">
      <div className="talentTextHead" id="talent">
        <h1 data-aos="fade-up" data-aos-duration="900">
          Talent
        </h1>
      </div>
      {/* <div id="gradTalent"></div> */}

      <Swiper
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          console.log("activeIndex:", swiper.realIndex);
          // console.log(i)
          // console.log("slide i:", i);
          setActiveIndex(swiper.realIndex);
        }}
        navigation={true}
        className="talentSwiper"
        // loop={true}
        data-aos="fade"
        data-aos-duration="900"
      >
        <SwiperSlide key={0}>
          <Link to="/MilaDragon">
            <img src={Mila} className="slideTalent CharMila" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 0 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={MilaLogo} width={230} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide key={1}>
          <Link to="/SevinaReina">
            <img src={Sevina} className="slideTalent CharSevina" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 1 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={SevinaLogo} width={200} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <Link to="/AiriAirintika">
            <img src={Airi} className="slideTalent CharAiri" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 2 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={AiriLogo} width={200} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <Link to="/AlunaDiva">
            <img src={Aluna} className="slideTalent CharAluna" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 3 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={AlunaLogo} width={200} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide key={4}>
          <Link to="/ShaonRiverB">
            <img src={Shaon} className="slideTalent CharShaon" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 4 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={ShaonLogo} width={200} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide key={5}>
          <Link to="/AltheaAntonia">
            <img src={Althea} className="slideTalent CharAlthea" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 5 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={AltheaLogo} width={200} />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide key={6}>
          <Link to="/ShiraishiOriel">
            <img src={Oriel}  className="slideTalent CharOriel" />
          </Link>
          <motion.div initial="hidden" animate={activeIndex === 6 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.8 }} className="swiperLogo">
            <img src={OrielLogo} width={200} />
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Talent;
