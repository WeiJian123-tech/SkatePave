'use client'

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Overlay from "../../components/Overlay";

export default function Home() {

  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const buttonText = ("✕"); // Optional text

  const openOverlay = () => {
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div className="bg-slate-900 w-screen h-screen">
      <nav className="flex flex-row items-center justify-between align-middle w-auto h-[18vh] border border-indigo-600">

        {/* Button that opens an overlay modal. In this instance it displays shop categories and deals. */}
        <button onClick={openOverlay} className="w-1/6 h-full bg-blue-500 text-white rounded hover:bg-blue-400 active:bg-blue-400">
          ☰
        </button>
        <Overlay
          isVisible={isOverlayVisible}
          onClose={closeOverlay}
          buttonText={buttonText}
        />

        <div className="flex w-auto h-full">
          <a href="#">
            <Image src={`${process.env.NODE_ENV === 'production' ? '/SkatePave' : ''}/SkatePaveLogoNH.png`} alt="logo" priority={true} width={128} height={128} className="w-auto h-full object-fill" />
          </a>
        </div>

        <div className="flex items-center justify-stretch align-middle w-auto h-full">

          <Link href="#">
            <Image src="/Profile_Picture_Placeholder.png" alt="Profile Picture" width={32} height={32} className="h-auto object-scale-down mx-1" />
          </Link>

          <button type="button" className="w-auto h-full">🛒</button>
        </div>

      </nav>

      <main>

        <h1>Buy now!</h1>
      </main>

      <footer>

      </footer>
    </div>
  );
}
