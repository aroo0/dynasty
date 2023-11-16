import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import type { ForwardedRef } from "react";
import { createContext, forwardRef, useContext, useState } from "react";

const DialogOpenContext = createContext<boolean>(false);

export function DialogRoot({ children, ...props }: RadixDialog.DialogProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <DialogOpenContext.Provider value={isOpen}>
      <RadixDialog.Root onOpenChange={setOpen} {...props}>
        {children}
      </RadixDialog.Root>
    </DialogOpenContext.Provider>
  );
}

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const dialogVariants = {
  closed: { opacity: 0, scale: 0.8, y: -100 },
  open: { opacity: 1, scale: 1, y: 0 },
};

// TODO: dismissed (closable?)

let dialogContainer: HTMLDivElement;

function getEnsureDialogContainer() {
  if (!dialogContainer) {
    dialogContainer = document.createElement("div");
    dialogContainer.className = "container";
    document.body.append(dialogContainer);
  }

  return dialogContainer;
}

function DialogContentCore(
  { children, className, ...props }: RadixDialog.DialogContentProps,
  forwardedRef: ForwardedRef<HTMLDivElement>
) {
  const isOpen = useContext(DialogOpenContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <RadixDialog.Portal forceMount container={getEnsureDialogContainer()}>
          <RadixDialog.Overlay className="overlay" asChild>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
            />
          </RadixDialog.Overlay>

          <RadixDialog.Content
            forceMount
            className="content"
            asChild
            {...props}
          >
            <motion.div
              variants={dialogVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              DIALOG CONTENT
            </motion.div>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      )}
    </AnimatePresence>
  );
}

export const DialogContent = forwardRef(DialogContentCore);

export function App() {
  return (
    <div className="App">
      <h1>Radix Primitives Template</h1>
      <DialogRoot>
        <DialogContent>CONTENT</DialogContent>
      </DialogRoot>
    </div>
  );
}
