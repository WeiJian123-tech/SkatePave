import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-purple-500">
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/next.svg"
        width={200}
        height={200}
        alt="Next.js logo"
      />
    </div>
  );
}
