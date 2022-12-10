import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import LeftSideFixedButton from "../components/LeftSideFixedButton";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-primary">
      <Navbar />
      <LeftSideFixedButton />
      <main className="mx-auto max-w-5xl px-7 md:px-10 lg:px-24">
        <section className="grid min-h-[50vh] items-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="font-fira text-sm text-secondary">Hi, my name is</h1>
            <h2 className="text-4xl font-bold text-primary-300 md:text-6xl lg:text-7xl">
              Kamal Singh.
            </h2>
            <h2 className="text-3xl font-bold text-gray-400 md:text-5xl">
              I build things for the web
            </h2>
            <div className="mt-4 max-w-md text-gray-400">
              <p className="">
                I{"'"}m a self-taught Front End Developer specializing in
                developing beautifull and acessible websites.
              </p>
            </div>
          </div>
          {/* <LinkButton displayText={"Contact Me"} link={"/"}/> */}
        </section>
      </main>
    </div>
  );
}
