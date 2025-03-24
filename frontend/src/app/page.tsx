'use client'

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Overlay from "../../components/Overlay";
import { getImagePath } from "../../utils/imagePath";

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
      <nav className="flex flex-col items-center w-full h-1/3 lg:h-1/6 border border-indigo-600">

        <div className="flex flex-row items-center justify-between w-full h-[18vh] lg:h-[16vh]">

          <div className="flex flex-row items-center justify-start w-1/6 h-full">
            {/* Button that opens an overlay modal. In this instance it displays shop categories and deals. */}
            <button onClick={openOverlay} className="w-full h-full bg-blue-500 text-white rounded hover:bg-blue-400 active:bg-blue-400">
              ☰
            </button>
            <Overlay
              isVisible={isOverlayVisible}
              onClose={closeOverlay}
              buttonText={buttonText}
            />
          </div>


          <div className="flex flex-row justify-center w-auto h-full">
            <a href="#">
              <Image src={getImagePath('SkatePaveLogoNH.png')} alt="logo" priority={true} width={128} height={128} className="w-auto h-full object-fill" />
            </a>
          </div>

          <div className="flex flex-row items-center justify-end align-middle w-1/3 h-full m-0 p-0">

            <Link href="/login">
              <Image src={getImagePath('defaultPFP.png')} alt="Profile Picture" width={32} height={32} className="h-auto object-scale-down mx-1" />
            </Link>

            <button type="button" className="w-auto h-full text-3xl">🛒</button>
          </div>

        </div>

        <div className="flex flex-row items-center justify-start w-full h-auto">
          <form className="w-full h-auto" name="searchForm">
            <input type="search" name="searchbar" placeholder="Search..." aria-label="Search through site products" className="w-10/12 h-[15vh] lg:h-[7vh] m-0 rounded-sm bg-gray-500" />
            <button type="button" name="searchBtn" className="w-2/12 h-[15vh] lg:h-[7vh] m-0 rounded-sm bg-green-500">🔎</button>
          </form>
        </div>

      </nav>

      <main className="flex flex-col items-center justify-center w-full h-1/2">

        <div>
          <h1>Quality Skates</h1>
          <h2>Fantastic Deals</h2>
          <h3>* For Select Items</h3>
        </div>
      </main>

      <footer className="w-full h-1/6">

        <small className="text-center">@Copyright 2025</small>
      </footer>
    </div>
  );
}
