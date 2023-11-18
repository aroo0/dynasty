"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Player from "./Player";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isPlayerOpen: string;
  setIsPlayerOpen: (value: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isPlayerOpen, setIsPlayerOpen }) => {
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog.Root open={isPlayerOpen !== ""}>
      <AnimatePresence>
        {isPlayerOpen !== "" && (
          <Dialog.Portal forceMount>
            <motion.div
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 0.7}}
            >
                      <Dialog.Overlay>

              <Dialog.Content
                className="w-full h-full fixed inset-0 bg-black"
                forceMount
              >
                <Player
                  setIsPlayerOpen={setIsPlayerOpen}
                  isPlayerOpen={isPlayerOpen}
                />
              </Dialog.Content>
              </Dialog.Overlay>

            </motion.div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Modal;
