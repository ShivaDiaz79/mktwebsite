import React, { useRef, useEffect } from 'react';
import Plyr from 'plyr';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current);
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef}>
        <source src={src} type="/Img/earthmoon.mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
