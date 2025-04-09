'use client'

import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "../../../utils/imagePath";

export default function Signup() {

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-slate-900 overflow-y-auto">
            <div className="flex flex-col items-center justify-evenly w-auto h-auto p-6 bg-slate-600 border border-slate-400">
                <div className="flex flex-col items-center justify-center w-full h-1/4 my-4">
                    <div className="flex flex-row justify-center w-full h-full">
                        <Link href="/" prefetch={true}>
                            <Image src={getImagePath('SkatePaveLogoH.png')} alt="logo" priority={true} width={128} height={128} className="w-auto h-full object-fill" />
                        </Link>
                    </div>

                    <h1 className="font-bold text-4xl">Sign Up</h1>
                </div>

                <div className="flex flex-col items-center justify-center w-auto h-3/4 my-1">
                    <form className="flex flex-col items-start justify-start w-auto h-full">

                        <div className="flex flex-col items-start justify-evenly w-auto h-auto my-1">
                            <label className="font-bold font-serif text-xl">Email: </label>
                            <input type="email" className="p-1 rounded bg-slate-300 text-black" />
                        </div>
                        
                        <div className="flex flex-col items-start justify-evenly w-auto h-auto my-1">
                            <label className="font-bold font-serif text-xl">Password: </label>
                            <input type="password" className="p-1 rounded bg-slate-300 text-black" />
                        </div>

                        <div className="flex flex-col items-start justify-evenly w-auto h-auto my-1">
                            <label className="font-bold font-serif text-xl">Confirm Password: </label>
                            <input type="password" className="p-1 rounded bg-slate-300 text-black" />
                        </div>

                        <div className="flex flex-row items-center justify-center w-auto h-auto my-2">
                            <button type="submit" className="p-2 rounded bg-sky-500 font-semibold text-xl cursor-pointer hover:bg-sky-60">Sign up</button>
                        </div>

                        <div className="flex flex-col items-start justify-evenly w-auto h-auto my-1">
                            <Link href="/login" prefetch={true} className="font-serif text-base text-blue-300 hover:text-cyan-400 active:text-cyan-300 visited:text-purple-300">
                                Already have an account? Login.
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}