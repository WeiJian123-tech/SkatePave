import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-900 w-screen h-screen">
      <nav className="flex flex-row items-center justify-stretch align-middle w-full h-auto border border-indigo-600">
        <button type="button" className="hover:bg-amber-500">☰</button>

        <a href="#">
          <Image src="/SkatePaveLogoH.png" alt="logo" width={128} height={128} />
        </a>
      </nav>

      <main>

        <h1>Buy now!</h1>
      </main>

      <footer>

      </footer>
    </div>
  );
}
