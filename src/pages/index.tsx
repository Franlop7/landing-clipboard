import Image from "next/image";
import { Bai_Jamjuree } from "next/font/google";

import Button from "@/components/Button/Button";
import Nav from "@/components/Nav";
import Social from "@/components/Social/Social";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const brandLogos = [
  {
    url: "/img/logo-google.png",
    alt: "Google logo",
  },
  {
    url: "/img/logo-ibm.png",
    alt: "IBM logo",
  },
  {
    url: "/img/logo-microsoft.png",
    alt: "Microsoft logo",
  },
  {
    url: "/img/logo-hp.png",
    alt: "HP logo",
  },
  {
    url: "/img/logo-vector-graphics.png",
    alt: "Vector Graphics logo",
  },
];

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
            <h2 className="text-[30px] text-center text-dark-grayish-blue font-semibold leading-snug mb-4">
              A history of everything you copy
            </h2>
            <p>
              Clipboard allows you to track and organize everything you copy.
              Instantly access your clipboard on all your devices.
            </p>
          </div>
          <div className="flex flex-col justify-center w-full gap-6 sm:flex-row">
            <Button color="ios">Download for iOS</Button>
            <Button color="mac">Download for Mac</Button>
          </div>
        </section>

        <section className="flex flex-col items-center gap-16">
          <div>
            <h3 className="text-2xl text-center text-dark-grayish-blue font-semibold mb-4 mt-24">
              Keep track of your snippets
            </h3>
            <p>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-14 md:flex-row">
            <div className="w-full h-full md:relative md:basis-1/2 md:h-[30rem]">
              <Image
                className="h-full md:object-cover md:absolute md:top-0 md:right-0 md:overflow-x-visible md:-translate-x-[12rem] lg:-translate-x-[9rem] xl:-translate-x-24 transition-all duration-75"
                src="/img/image-computer.png"
                width={752}
                height={572}
                alt="picture of a computer"
              />
            </div>
            <div className="flex flex-col gap-8 md:text-left md:basis-2/3 md:pb-24">
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-center text-dark-grayish-blue font-semibold md:text-left">
                  Quick Search
                </h4>
                <p>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl text-center text-dark-grayish-blue font-semibold md:text-left">
                  iCloud Sync
                </h4>
                <p>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl text-center text-dark-grayish-blue font-semibold md:text-left">
                  Complete History
                </h4>
                <p>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-8">
          <div>
            <h3 className="text-2xl text-center text-dark-grayish-blue font-semibold mb-4 mt-24">
              Access Clipboard Anywhere
            </h3>
            <p>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <Image
            src="/img/image-devices.png"
            width={500}
            height={500}
            alt="Multiple devices"
          />
        </section>

        <section className="flex flex-col items-center gap-12">
          <div>
            <h3 className="text-2xl text-center text-dark-grayish-blue font-semibold mb-4">
              Supercharge your workflow
            </h3>
            <p>We’ve got the tools to boost your productivity..</p>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-2 sm:flex-1">
              <Image
                src="/img/icon-blacklist.svg"
                height={36}
                width={36}
                alt="Blacklist icon"
                className="mb-4"
              />
              <h4 className="text-xl text-center text-dark-grayish-blue font-semibold">
                Create blacklists
              </h4>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-1">
              <Image
                src="/img/icon-text.svg"
                height={36}
                width={36}
                alt="Text icon"
                className="mb-4"
              />
              <h4 className="text-xl text-center text-dark-grayish-blue font-semibold">
                Plain text snippets
              </h4>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-1">
              <Image
                src="/img/icon-preview.svg"
                height={36}
                width={36}
                alt="Preview icon"
                className="mb-4"
              />
              <h4 className="text-xl text-center text-dark-grayish-blue font-semibold">
                Sneak preview
              </h4>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid gap-12 grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] items-center justify-items-center mt-14 mb-14 md:max-w-[900px] md:max-h-full">
            {brandLogos.map(({ url, alt }) => (
              <div key={alt} className="relative w-32 h-12 md:w-[6.5rem]">
                <Image className="object-contain" src={url} alt={alt} fill />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-10 mb-16">
          <div>
            <h2 className="text-[30px] text-center text-dark-grayish-blue font-semibold leading-snug mb-4">
              Clipboard for iOS and Mac OS
            </h2>
            <p>
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </p>
          </div>
          <div className="flex flex-col justify-center w-full gap-6 sm:flex-row">
            <Button color="ios">Download for iOS</Button>
            <Button color="mac">Download for Mac</Button>
          </div>
        </section>
      </main>
      <footer className="py-16 m-auto mt-32 bg-background min-h-7xl">
        <div className="flex flex-col items-center gap-12 px-8 m-auto md:flex-row md:justify-between md:max-w-screen-2xl">
          <Image
            src="/img/logo.svg"
            height={72}
            width={72}
            alt="Clipboard logo"
          />
          <Nav />
          <Social />
        </div>
      </footer>
    </div>
  );
}
