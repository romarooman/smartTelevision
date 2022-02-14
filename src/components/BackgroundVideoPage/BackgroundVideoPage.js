import React from "react";
import videoBackground from "../../video/HeroVideo.mp4";
// import { makeStyles } from '@mui/styles';
import "./BackgroundVideoPage.css";

const BackgroundVideoPage = () => {
  return (
    <>
      <video className="video" src={videoBackground} autoPlay loop muted />
    </>
  );
};

export { BackgroundVideoPage };
