'use client'

import Image from "next/image";

import { getImagePath } from "../../../utils/imagePath";
import Navmenu from "../../../components/Navmenu";

export default function Skateboards() {

    return (
      <div className="bg-slate-900 w-screen h-screen overflow-y-auto">
        <Navmenu />
  
        <main className="flex flex-col items-center justify-center w-full p-4 border-4 border-yellow-300">
  
          <div className="flex flex-col items-center justify-center w-full h-auto">
            <h1 className="text-4xl/snug font-extrabold">Skateboards</h1>
          </div>

          <div className="flex items-center justify-center-safe w-full h-auto">
            <Image src={getImagePath('skateboardFront.png')} alt="Bicycle" width={128} height={128} loading= "lazy" className="w-full h-auto bg-slate-500" />
          </div>

        </main>
  
        <footer className="w-full h-auto text-center">
          <small>© SkatePave 2025</small>
        </footer>
      </div>
    );
  }