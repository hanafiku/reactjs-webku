import React from "react";
import "./YoutubeComp.css";
import thumb1 from "./images/img1.jpg";


const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={thumb1} alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "ini judul",
  desc: "ini descripsi",
};

export default YoutubeComp;
