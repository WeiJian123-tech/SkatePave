import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Overlay from "./Overlay";
import { getImagePath } from "../utils/imagePath";

const Navmenu: React.FC = ({}) => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const buttonText = ("✕"); // Optional text

    const openOverlay = () => {
    setOverlayVisible(true);
    };

    const closeOverlay = () => {
    setOverlayVisible(false);
    };

    function NavLinks() {
      return (
          <div className="flex flex-col items-center justify-center my-10 text-2xl/relaxed underline">
          <Link href="/login" className="px-1 py-2 hover:bg-green-700 hover:text-3xl/relaxed active:bg-green-600 active:font-semibold">Deals</Link>
          <Link href="/" className="px-1 py-2 hover:bg-green-700 hover:text-3xl/relaxed active:bg-green-600 active:font-semibold">Skateboards</Link>
          <Link href="/" className="px-1 py-2 hover:bg-green-700 hover:text-3xl/relaxed active:bg-green-600 active:font-semibold">Roller Skates</Link>
          <Link href="/" className="px-1 py-2 hover:bg-green-700 hover:text-3xl/relaxed active:bg-green-600 active:font-semibold">Bicycles</Link>
          <Link href="/" className="px-1 py-2 hover:bg-green-700 hover:text-3xl/relaxed active:bg-green-600 active:font-semibold">Equipment</Link>
          </div>
      );
    }
    
    function HamMenu() {
        return (
            <>
            {/* Button that opens an overlay modal. In this instance it displays shop categories and deals. */}
            <button onClick={openOverlay} className="w-full h-full bg-blue-500 text-white rounded hover:bg-blue-400 active:bg-blue-400">
                ☰
            </button>
            <Overlay
                isVisible={isOverlayVisible}
                onClose={closeOverlay}
                buttonText={buttonText}
            >
                <h1 className="font-bold text-5xl/loose">Categories</h1>
                <NavLinks />
            </Overlay>
            </>
        );
    }

    return (
        <nav className="flex flex-col items-center w-full h-auto border border-indigo-600">

        <div className="flex flex-row items-center justify-between w-full h-auto lg:h-[10vh] xl:h-[8vh]">

          <div className="flex flex-row items-center justify-start w-1/6 h-[5rem]">
            <HamMenu />
          </div>

          <div className="flex flex-row justify-center w-auto h-full mx-4">
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
            <input type="search" name="searchbar" placeholder="Search..." aria-label="Search through site products" className="w-10/12 lg:w-11/12 xl:w-23/24 h-[3rem] m-0 rounded-sm bg-gray-500" />
            <button type="button" name="searchBtn" className="w-2/12 lg:w-1/12 xl:w-1/24 h-[3rem] m-0 rounded-sm bg-green-500">🔎</button>
          </form>
        </div>

      </nav>
    );
}

export default Navmenu;
  