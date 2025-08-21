import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import { getVideoMila } from "../../YtApi";

import "../SevinaComp/videoSevina.css";
import FPAIRI from "../../../assets/FPAIRI.png";
import FPSHAON from "../../../assets/FPSHAON.png";
import FPORIEL from "../../../assets/FPORIEL.png";
import FPSEVINA from "../../../assets/FPSEVINA.png";
import FPALUNA from "../../../assets/FPALUNA.png";
import FPALTHEA from "../../../assets/FPALTHEA.png";

const VideoSevina = ({ data }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const VideoSevina = data.map((items, i) => {
    return (
      <div className="listVideo" key={i}>
        <div>
          <a href={`https://www.youtube.com/watch?v=${items.snippet.resourceId.videoId}`}>
            <img src={items.snippet.thumbnails.maxres?.url || items.snippet.thumbnails.high?.url} width={290} height={160} data-aos="fade-up" data-aos-duration="900" />
          </a>
        </div>
        <div className="titleVideo" data-aos="fade-up" data-aos-duration="1000">
          <a href={`https://www.youtube.com/watch?v=${items.snippet.resourceId.videoId}`}>
            <h2>{items.snippet.title}</h2>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="listVideoSevina">
      <div className="wrapperListVideo">
        <div className="Hatline">
          <h1 data-aos="fade-up" data-aos-duration="700">
            Recent Video
          </h1>
        </div>
        <div className="videoList">{VideoSevina}</div>
      </div>
    </div>
  );
};

export default VideoSevina;
