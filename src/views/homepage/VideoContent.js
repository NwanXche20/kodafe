import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

// import { meal } from "../../constants";
// import "./Intro.css";

const VideoContent = () => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <h1
        className="mb-10 lg:mb-14 text-center text-4xl lg:text-6xl lg:leading-[70px] font-medium text-background"
        style={{ fontFamily: "cursive" }}
      >
        We produce!
      </h1>

      <div className="lg:h-screen relative">
        <video
          className="w-full h-full lg:object-cover"
          src="https://res.cloudinary.com/dikleyjwz/video/upload/v1698761283/video_2160p_ouu7rb.mp4"
          ref={vidRef}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
        />

        <div className="absolute inset-0 bg-[#000000a6] flex justify-center items-center">
          <div
            className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-[50%] border border-solid border-yellow-600 cursor-pointer flex justify-center items-center"
            onClick={handleVideo}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
