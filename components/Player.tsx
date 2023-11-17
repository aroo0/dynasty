"use client";

import ReactPlayer, { ReactPlayerProps } from "react-player";
import Controls from "./Controls";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import Loader from "./Loader";

interface PlayerProps {
  setIsPlayerOpen: (value: string) => void;
  isPlayerOpen: string;
}

const Player: React.FC<PlayerProps> = ({ setIsPlayerOpen, isPlayerOpen }) => {
  const [isClient, setIsClient] = useState(false);
  const [opacityVisible, setOpacityVisible] = useState(true);
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: true,
    volume: 0.7,
    played: 0,
    seeking: false,
    buffer: true,
  });

  const { playing, muted, volume, played, seeking, buffer } = videoState;
  const videoPlayerRef = useRef<ReactPlayer | null>(null);

  const onReady = () => {
    setVideoState({ ...videoState, playing: true, muted: false });
  };

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };
  const muteHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const progressHandler = (state: ReactPlayerProps) => {
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
      console.log(played * 100);
    }
  };

  const seekHandler = (value: number) => {
    setVideoState({ ...videoState, played: value / 100 });
  };

  const seekMouseUpHandler = (value: number) => {
    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current!.seekTo(value / 100);
  };

  const volumeChangeHandler = (value: number) => {
    const newVolume = value / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (value: number) => {
    const newVolume = value / 100;
    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const bufferStartHandler = () => {
    console.log("Bufering.......");
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleMouseMove = () => {
      setOpacityVisible(true);
      clearTimeout(timer);

      timer = setTimeout(() => {
        setOpacityVisible(false);
      }, 2500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="h-[100vh] w-full relative flex items-center">
      <Button
        className={twMerge(
          "fixed top-3 right-3 sm:top-4 sm:right-4 transition",
          opacityVisible
            ? "duration-700 opacity-100"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsPlayerOpen("")}
      >
        Close
      </Button>
      <div onClick={playPauseHandler} className="relative w-full h-[100vh] flex items-center justify-center px-4">
        {buffer && <Loader />}
        <ReactPlayer
          onReady={onReady}
          url={isPlayerOpen}
          width="100%"
          height="100%"
          playing={playing}
          volume={volume}
          muted={muted}
          ref={videoPlayerRef}
          onProgress={progressHandler}
          onBuffer={bufferStartHandler}
          onBufferEnd={bufferEndHandler}
        />
      </div>
      <Controls
        onPlayPause={playPauseHandler}
        playing={playing}
        played={played}
        onSeek={seekHandler}
        onSeekMouseUp={seekMouseUpHandler}
        volume={volume}
        onVolumeChangeHandler={volumeChangeHandler}
        onVolumeSeekUp={volumeSeekUpHandler}
        muted={muted}
        onMute={muteHandler}
        opacityVisible={opacityVisible}
      />
    </div>
  );
};

export default Player;
