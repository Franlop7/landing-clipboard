import Image from "next/image";
import { Bai_Jamjuree } from "next/font/google";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <div
      className={`${bai.className} text-grayish-blue bg-[url('/img/bg-header-mobile.png')] md:bg-[url('/img/bg-header-desktop.png')] bg-top bg-no-repeat bg-contain min-h-screen bg-neutral-50`}
    >
      <main className="flex flex-col container items-center text-center gap-32 px-8 m-auto md:max-w-screen-xl ">
        <header className="mt-32">
          <h1>Clipboard</h1>
          <Image src='img/logo.svg' width={125} height={125} alt='Clipboard logo'  />
        </header>
      </main>
    </div>
  );
}
