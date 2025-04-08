'use client'

import Image from "next/image";

import VertModal from "../../components/VertModal";
import { getImagePath } from "../../utils/imagePath";
import Navmenu from "../../components/Navmenu";

export default function Home() {

  return (
    <div className="bg-slate-900 w-screen h-screen overflow-y-auto">
      <Navmenu />

      <main className="flex flex-col items-center justify-center w-full p-4 border-4 border-yellow-300">

        <div className="flex flex-col items-center justify-center w-full h-auto">
          <h1 className="text-4xl/snug font-extrabold">Quality Skates</h1>
          <h2 className="text-3xl/snug font-semibold">Fantastic Deals</h2>
          <h3 className="text-xl/snug italic">* For Select Items</h3>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto bg-amber-600">
          <VertModal />
        </div>

        <div className="flex flex-col items-center justify-center w-full text-center bg-green-700">
          <h2>Save $7 dollars off these safety equipment!</h2>
          <Image src={getImagePath('ElbowKneePads.png')} alt="Saftey pad equipment" width={128} height={128} className="w-2/5 h-auto object-scale-down" />
        </div>

        <div className="flex flex-col items-center justify-center w-full text-center bg-orange-800">
          <h2>Find awesome animal-style skateboards!</h2>
          <button type="button" className="my-2 p-2 rounded bg-yellow-700 text-slate-300">Explore</button>
        </div>
      </main>

      <footer className="w-full h-auto text-center">
        <small>© SkatePave 2025</small>
      </footer>
    </div>
  );
}
