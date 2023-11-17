"use client";

import ReactPlayer from "react-player";
import VideoDescription from "./VideoDescription";
import { iVideo } from "@/app/types";

interface SmallVideoProps {
  onMouseOverVideo: string;
  setOnMouseOverVideo: (url: string) => void;
  data: iVideo;
  className?: string;
  setIsPlayerOpen: (url: string) => void;
}

const SmallVideo: React.FC<SmallVideoProps> = ({
  onMouseOverVideo,
  setOnMouseOverVideo,
  data,
  className,
  setIsPlayerOpen,
}) => {
  const onThisVideo = onMouseOverVideo === data.shortVersionUrl;

  return (
    <>
      <button
        className="w-full h-full cursor-pointer"
        onMouseOver={() => setOnMouseOverVideo(data.shortVersionUrl)}
        onMouseLeave={() => setOnMouseOverVideo("")}
        onClick={() => setIsPlayerOpen(data.longUrl)}
      >
        <ReactPlayer
          playsInline
          url={data.shortVersionUrl}
          width="100%"
          height="100%"
          muted={true}
          playing={onThisVideo || onMouseOverVideo === ""}
          loop={true}
        />
      </button>
      <VideoDescription
        title={data.title}
        description={data.description}
        className={className}
        onThisVideo={onThisVideo}
      />
    </>
  );
};

export default SmallVideo;
