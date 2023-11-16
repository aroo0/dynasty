"use client";
import LoadingScreen from "@/components/LoadingScreen";
import Modal from "@/components/Modal";
import Nav from "@/components/Nav";
import VideoGrid from "@/components/VideoGrid";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState<string>("");
  const [loadedPlayers, setLoadedPlayers] = useState<string[]>([]);

  const handleVideoLoad = (url: string) => {
    setLoadedPlayers((prev) => [...prev, url]);
    console.log(loadedPlayers);
  };

  // useEffect(() => {
  //   if (loadedPlayers.length === 6) {
  //     setLoading(false);
  //   }
  // }, [loadedPlayers]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0 }} transition={{ duration: 2 }}>
            <LoadingScreen onClick={setLoading} />
          </motion.div>
        )}
      </AnimatePresence>
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <header>
            <Nav setIsAboutOpen={setIsAboutOpen} />
          </header>
        </motion.div>
        <main
          className={twMerge(
            "grid px-4 mx-auto max-w-[1720px] w-full grid-cols-4  xl:grid-cols-12 gap-x-[20px] l:gap-x-[30px]  gap-y-[5px] xl:h-[100vh] pt-20 pb-28 xl:pb-10 place-items-start	justify-items-center xl:justify-items-start auto-rows-fr opacity-0 transition duration-[2s]",
            !loading && "opacity-100"
          )}
        >
          <VideoGrid
            setIsAboutOpen={setIsAboutOpen}
            isAboutOpen={isAboutOpen}
            setIsPlayerOpen={setIsPlayerOpen}
          />
        </main>
        <Modal isPlayerOpen={isPlayerOpen} setIsPlayerOpen={setIsPlayerOpen} />
      </>
    </>
  );
}
