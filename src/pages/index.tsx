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
      <main className="flex flex-col container items-center text-center gap-20 px-8 m-auto md:max-w-screen-xl ">
        <header className="mt-32">
          <h1 className="h-0 opacity-0">Clipboard</h1>
          <Image
            src="img/logo.svg"
            width={125}
            height={125}
            alt="Clipboard logo"
          />
        </header>
        <section className="flex flex-col items-center gap-10">
          <div>
            <h2 className="text-[32px] text-center text-dark-grayish-blue font-semibold leading-snug mb-4">
              A history of everything you copy
            </h2>
            <p>
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className="flex flex-col justify-center w-full gap-6 sm:flex-row">
            <button className="w-full sm:w-auto sm:px-8 p-3 text-lg text-white border-b-4 rounded-full border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg active:shadow-xs hover:translate-y-[-2px] hover:shadow-xl bg-strong-cyan shadow-strong-cyan/25 active:shadow-strong-cyan/10 hover:bg-strong-cyan/95 hover:shadow-strong-cyan/25">
              Dowload for iOS
            </button>
            <button className="w-full sm:w-auto sm:px-8 p-3 text-lg text-white border-b-4 rounded-full border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg active:shadow-xs hover:translate-y-[-2px] hover:shadow-xl bg-light-conic shadow-light-conic/25 active:shadow-light-conic/10 hover:bg-light-conic/95 hover:shadow-light-conic/25">
              Dowload for Mac
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center gap-8">
          <div>
            <h3 className="text-[32px] text-center text-dark-grayish-blue font-semibold leading-snug mb-4">
              Keep track of your snippets
            </h3>
            <p>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-8 md:flex-row">
            <div className="w-full h-full md:relative md:basis-1/2 md:h-[30rem]">
              <Image
                className="h-full md:object-cover md:absolute md:top-0 md:right-0 md:overflow-x-visible md:-translate-x-[12rem] lg:-translate-x-[9rem] xl:-translate-x-24 transition-all duration-75"
                src="/img/image-computer.png"
                width={752}
                height={572}
                alt="Computer illustration"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
