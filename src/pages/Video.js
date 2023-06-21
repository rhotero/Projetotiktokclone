import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./video.css";

function Video({likes, messages, shares, name, title, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  window.onwheel = function () {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
      console.log("ok 1");
    }
  };

  function scroll (){
    if (play) {
      videoRef.current.pause();
      setPlay(false);
      console.log("ok 1");
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        onScroll={scroll}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VideoFooter 
        name={name}
        title={title}
        music={music}
      />
    </div>
  );
}

export default Video;
