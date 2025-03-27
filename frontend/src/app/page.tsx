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
    <div className="bg-slate-900 w-screen h-screen overflow-y-auto">
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
            <Link href="/" prefetch={true}>
              <Image src={getImagePath('SkatePaveLogoNH.png')} alt="logo" priority={true} width={128} height={128} className="w-auto h-full object-fill" />
            </Link>
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

      <main className="flex flex-col items-center justify-center w-full p-4 border-4 border-yellow-300">

        <div className="flex flex-col items-center justify-center w-full h-auto">
          <h1 className="text-4xl/snug font-extrabold">Quality Skates</h1>
          <h2 className="text-3xl/snug font-semibold">Fantastic Deals</h2>
          <h3 className="text-xl/snug italic">* For Select Items</h3>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto">
          <div className="flex flex-row items-center justify-stretch w-full h-auto">
            <div className="flex flex-col items-center justify-center w-1/3 h-auto px-2">
              <div className="w-full h-auto">
                <h3>
                  Skateboards
                </h3>
                <h3>
                  -20%
                </h3>
              </div>
              <div className="w-full h-auto">
                <Image src={getImagePath('skateboardFront.png')} alt="skateboard image" width={128} height={128} className="h-auto object-fill" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 h-auto px-2">
              <div className="w-full h-auto">
                <h3>
                  Roller Skates
                </h3>
                <h3>
                  -15%
                </h3>
              </div>
              <div className="w-full h-auto">
                <Image src={getImagePath('RollerSkates.png')} alt="skateboard image" width={128} height={128} className="h-auto object-fill" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3 h-auto px-2">
              <div className="w-full h-auto">
                <h3>
                  Bicycles
                </h3>
                <h3>
                  -18%
                </h3>
              </div>
              <div className="w-full h-auto">
                <Image src={getImagePath('BycicleDiagonal.png')} alt="skateboard image" width={128} height={128} className="h-auto object-fill" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-full text-center">
          <h2>Save $7 dollars off these safety equipment!</h2>
        </div>

        <div className="flex flex-col items-center justify-center w-full text-center">
          <h2>Find awesome animal-style skateboards!</h2>
          <button type="button" className="p-2 rounded bg-yellow-700 text-slate-300">Explore</button>
        </div>
      </main>

      <footer className="w-full h-1/6">

        <small className="text-center">@Copyright 2025</small>
      </footer>
    </div>
  );
}
