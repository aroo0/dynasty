"use client";

import { useEffect, useState } from "react";
import SmallVideo from "./SmallVideo";
import videoData from "../data/videoData.json";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { iVideo } from "@/app/types";

interface VideoGridProps {
  setIsAboutOpen: (value: boolean) => void;
  isAboutOpen: boolean;
  setIsPlayerOpen: (value: string) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({
  setIsAboutOpen,
  isAboutOpen,
  setIsPlayerOpen,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [onMouseOverVideo, setOnMouseOverVideo] = useState<string>("");

  const videos: Record<string, iVideo> = videoData;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={twMerge(
              "col-start-3 col-span-2 row-start-2 row-span-2 translate-y-[-40px] relative sm:w-[300px] xl:w-[130px] mr-2 opacity-0 xl:col-start-5  xl:col-span-1 xl:row-start-1 xl:row-span-5 place-self-start xl:mt-10 "
            )}
          >
            {" "}
            <Button
              className="absolute bottom-0 xl:bottom-auto right-0 xl:top-0 xl:translate-x-16 translate-y-10 xl:translate-y-[-10px]"
              onClick={() => setIsAboutOpen(false)}
            >
              Close
            </Button>
            <p className="text-secondary uppercase text-[10px] sm:text-xs mt-2">
            The cycle consists of found footage videos created since 2011. The series is inspired by the TV series &quot;Dynasty&quot; (1981-1989).
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <article className="col-start-1 col-span-2 row-start-5 row-span-2 relative xl:col-start-1  xl:col-span-2 xl:row-start-1 mt-5 mx-2 xl:row-span-5 h-[259px]">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.wedding}
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>
      <article className="col-start-3 col-span-2 row-start-5 mt-10 row-span-1 ml-2 xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:row-span-3 h-[127px]  relative ">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.intro}
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>

      <article className="col-start-1 col-span-2 row-start-1 row-span-3 xl:col-start-7 xl:col-span-2 xl:row-start-2 xl:row-span-7 xl:h-[310px] h-[250px] mt-8 relative">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.belong}
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>

      <article className="relative col-start-3 col-span-2 row-start-1 row-span-1 xl:col-start-10 xl:col-span-3 xl:row-start-1 xl:row-span-4  h-[85px] xl:h-[173px]">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.sable}
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>
      <article className="relative col-start-2 col-span-3 row-start-4 mt-4 row-span-1 xl:col-start-3 xl:col-span-4 xl:row-start-6 xl:row-span-3 h-[100px] xl:h-[170px] xl:mt-5 xl:mr-[100px] py-.5  xl:bg-black">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.dinner}
          className="xl:mt-[-15px]"
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>
      <article className="col-start-1 col-span-4 row-start-3 row-span-1 mt-8 relative xl:col-start-1 xl:col-span-5 xl:row-start-12 xl:row-span-3 h-[100px] xl:h-[180px] xl:mr-[100px] p-1 xl:bg-black">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.supper}
          className="xl:mt-[-10px]"
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>
      <article className="col-start-1 col-span-4 row-start-7 row-span-1 relative xl:col-start-9 xl:col-span-4 xl:row-start-6 xl:row-span-5 h-[180px] xl:h-[250px] xl:mt-28 xl:p-1 xl:bg-black ">
        <SmallVideo
          setOnMouseOverVideo={setOnMouseOverVideo}
          onMouseOverVideo={onMouseOverVideo}
          data={videos.adam}
          setIsPlayerOpen={setIsPlayerOpen}
        />
      </article>
    </>
  );
};

export default VideoGrid;
