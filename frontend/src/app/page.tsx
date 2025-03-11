import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-900 w-screen h-screen">
      <nav className="flex flex-row items-center justify-end align-middle w-full h-auto border border-indigo-600">
        <a href="/next.svg">
          <Image src="/" alt="logo" width={10} height={10} />
        </a>

        <button type="button">☰</button>
      </nav>

      <main>

        <h1>Buy now!</h1>
      </main>

      <footer>

      </footer>
    </div>
  );
}
