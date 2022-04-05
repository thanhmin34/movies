import React, { useState } from "react";
import ReactPlayer from "react-player";
const Video = () => {
  const [playTime, setPlayTime] = useState(0);

  const handleProgress = (state) => {
    setPlayTime(state.playedSeconds);
  };
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/embed/dSzf0nv6QmM?list=PL_-VfJajZj0W8-gf0g3YCCyFh-pVFMOgy"
        // url="https://www.2embed.ru/embed/tmdb/movie?id=414906"
        width="640px"
        height="360px"
        playing={true}
        controls={true}
        // onProgress={handleProgress}
      />
    </div>
  );
};

export default Video;
// https://www.2embed.ru/embed/tmdb/movie?id=414906;
