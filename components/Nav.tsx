"use client"

import Link from "next/link";

interface NavProps {
  setIsAboutOpen: (value: boolean) => void;
}

const Nav: React.FC<NavProps> = ({setIsAboutOpen}) => {
  return (
    <nav className="absolute top-4 sm:top-6 right-4 xl:right-10 flex gap-2.5 uppercase text-foreground text-xs">
      <button className="uppercase hover:opacity-90 transition" onClick={() => setIsAboutOpen(true)}>About</button>
      <Link className="hover:opacity-90 transition" href="http://www.lukaszstoklosa.com/" target="blank">
        Łukasz Stokłosa
      </Link>
      <Link className="hover:opacity-90 transition" href="https://www.instagram.com/luk.stoklosa/" target="blank">
        Instagram
      </Link>
    </nav>
  );
};

export default Nav;
