"use client";

import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import ControlButton from "./ControlButton";
import * as Slider from "@radix-ui/react-slider";
import { twMerge } from "tailwind-merge";

interface ControlsProps {
  onPlayPause: () => void;
  playing: boolean;
  onMute: () => void;
  muted: boolean;
  onSeek: (value: number) => void;
  onSeekMouseUp: (value: number) => void;
  played: number;
  volume: number;
  onVolumeChangeHandler: (value: number) => void;
  onVolumeSeekUp: (value: number) => void;
  opacityVisible: boolean
}

const Controls: React.FC<ControlsProps> = ({
  onPlayPause,
  onMute,
  playing,
  muted,
  onSeek,
  onSeekMouseUp,
  played,
  volume,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  opacityVisible
}) => {
  return (
    <div className={twMerge("fixed bottom-0 w-full mb-2 sm:mb-6 flex gap-4 mx-auto transition duration-700", opacityVisible ? 'opacity-100' : 'opacity-0 pointer-events-none')}>
      <div className="flex gap-4 px-2 sm:px-14 w-full">
        <div className="flex gap-3 items-center w-full">
          <ControlButton className="text-foreground " onClick={onPlayPause}>
            {playing ? (
              <Pause size={12} fill="white" className="text-white opacity-80" />
            ) : (
              <Play size={11} fill="white" className="text-white opacity-80" />
            )}
          </ControlButton>{" "}
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-2 cursor-pointer group flex-grow"
            max={100}
            step={0.5}
            value={[played * 100]}
            min={0}
            onValueChange={(value) => {
              onSeek(value[0]);
            }}
            onValueCommit={(value) => {
              onSeekMouseUp(value[0]);
            }}
          >
            <Slider.Track className="bg-white/50 relative grow rounded-full h-[2px] group-hover:ring-2 ring-slate-500/40	">
              <Slider.Range className="absolute bg-white rounded-full h-full " />
            </Slider.Track>
          </Slider.Root>
        </div>
        <div className="flex items-center gap-3 flex-grow">
          <ControlButton className="text-foreground" onClick={onMute}>
            {muted ? (
              <VolumeX
                size={13}
                fill="white"
                className="text-white opacity-80"
              />
            ) : (
              <Volume2
                size={13}
                fill="white"
                className="text-white opacity-80"
              />
            )}
          </ControlButton>{" "}
          <Slider.Root
            className="relative flex items-center select-none touch-none w-[50px] md:w-[90px] h-5 cursor-pointer group"
            max={100}
            step={2}
            value={[volume * 100]}
            min={0}
            onValueChange={(value) => {
              onVolumeChangeHandler(value[0]);
            }}
            onValueCommit={(value) => {
              onVolumeSeekUp(value[0]);
            }}
          >
            <Slider.Track className="bg-white/50 relative grow rounded-full h-[2px] group-hover:ring-2 ring-slate-500/40	mr-1">
              <Slider.Range className="absolute bg-white rounded-full h-full " />
            </Slider.Track>
          </Slider.Root>
        </div>
      </div>
    </div>
  );
};


export default Controls;
