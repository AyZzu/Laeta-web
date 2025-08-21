import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import "../Component/News.css";
import ytbIcon from "../assets/youtube.png";
import "swiper/css";
import "swiper/css/pagination";

import { getThumbnailE1, getThumbnailE2, getThumbnailE3, getThumbnailE4 } from "./YtApi";
import { Pagination } from "swiper/modules";

const News = () => {
  const location = useLocation();

  const [thumb1, setThumb1] = useState([]);
  const [thumb2, setThumb2] = useState([]);
  const [thumb3, setThumb3] = useState([]);
  const [thumb4, setThumb4] = useState([]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getThumbnailE1().then((items) => {
      setThumb1(items);
    });
    getThumbnailE2().then((items) => {
      setThumb2(items);
    });
    getThumbnailE3().then((items) => {
      setThumb3(items);
    });
    getThumbnailE4().then((items) => {
      setThumb4(items);
    });

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  //   const HotNews = () => {

  //     return thumb.map((items, i) => {
  //       return <iframe  key={i} src={items} height={120}></iframe>;
  //     });
  //   };

  const E1 = thumb1.map((items, i) => {
    const isoDate = items.snippet.publishedAt;
    const [year, month, day] = isoDate.split("T")[0].split("-");

    return (
      <SwiperSlide key={i}>
        <a href={`https://www.youtube.com/channel/${items.snippet.channelId}`} className="aNews">
          <div className="newsEmbed">
            <div className="Embed">
              <img data-aos="fade-up" data-aos-duration="900" src={items.snippet.thumbnails.medium.url} width={300} alt={items.snippet.title} />
              <h3 className="kanit-regular" data-aos="fade-up" data-aos-duration="900">
                {items.snippet.title}
              </h3>
            </div>
            <div className="dateNews">
              <p className="kanit-regular" data-aos="fade-up" data-aos-duration="900">{`${day}-${month}-${year}`}</p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    );
  });

  const E2 = thumb2.map((items, i) => {
    const isoDate = items.snippet.publishedAt;
    const [year, month, day] = isoDate.split("T")[0].split("-");

    return (
      <SwiperSlide key={i}>
        <a href={`https://www.youtube.com/channel/${items.snippet.channelId}`} className="aNews">
          <div className="newsEmbed">
            <div className="Embed">
              <img data-aos="fade-up" data-aos-duration="900" src={items.snippet.thumbnails.medium.url} width={300} alt={items.snippet.title} />
              <h3 className="kanit-regular" data-aos="fade-up" data-aos-duration="900">
                {items.snippet.title}
              </h3>
            </div>
            <div className="dateNews">
              <p className="kanit-regular" data-aos="fade-up" data-aos-duration="900">{`${day}-${month}-${year}`}</p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    );
  });
  const E3 = thumb3.map((items, i) => {
    const isoDate = items.snippet.publishedAt;
    const [year, month, day] = isoDate.split("T")[0].split("-");

    return (
      <SwiperSlide key={i}>
        <a href={`https://www.youtube.com/channel/${items.snippet.channelId}`} className="aNews">
          <div className="newsEmbed">
            <div className="Embed">
              <img data-aos="fade-up" data-aos-duration="900" src={items.snippet.thumbnails.medium.url} width={300} alt={items.snippet.title} />
              <h3 className="kanit-regular" data-aos="fade-up" data-aos-duration="900">
                {items.snippet.title}
              </h3>
            </div>
            <div className="dateNews">
              <p className="kanit-regular" data-aos="fade-up" data-aos-duration="900">{`${day}-${month}-${year}`}</p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    );
  });
  const E4 = thumb4.map((items, i) => {
    const isoDate = items.snippet.publishedAt;
    const [year, month, day] = isoDate.split("T")[0].split("-");

    return (
      <SwiperSlide key={i}>
        <a href={`https://www.youtube.com/channel/${items.snippet.channelId}`} className="aNews">
          <div className="newsEmbed">
            <div className="Embed">
              <img data-aos="fade-up" data-aos-duration="900" src={items.snippet.thumbnails.medium.url} width={300} alt={items.snippet.title} />
              <h3 className="kanit-regular" data-aos="fade-up" data-aos-duration="900">
                {items.snippet.title}
              </h3>
            </div>
            <div className="dateNews">
              <p className="kanit-regular" data-aos="fade-up" data-aos-duration="900">{`${day}-${month}-${year}`}</p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    );
  });

  const SwipeEmebed = () => {
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiperEmbed"
      >
        <SwiperSlide>{E1}</SwiperSlide>
        <SwiperSlide>{E2}</SwiperSlide>
        <SwiperSlide>{E3}</SwiperSlide>
        <SwiperSlide>{E4}</SwiperSlide>
      </Swiper>
    );
  };
  return (
    <div className="News" id="news">
      <div className="wrapperNews">
        <h1 data-aos="fade-up" data-aos-duration="900">
          News
        </h1>
        <div className="newsColoum">
          <SwipeEmebed />
        </div>
      </div>
    </div>
  );
};

export default News;
