import Navbar from "../components/Navbar";
import LeftSideFixedButton from "../components/LeftSideFixedButton";
import RightSideFixedButton from "../components/RightSideFixedButton";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-primary">
      <Navbar />
      <LeftSideFixedButton />
      <RightSideFixedButton />
      <main className="mx-auto max-w-5xl px-7 md:px-10 lg:px-24">
        <HeroSection />
        <section>
          <div className="relative max-w-fit">
            <h3 className="text-primary-300"><span className="text-secondary font-fira">01.</span> About me</h3>
            <div className="absolute h-px w-28 top-1/2 -right-[125%] bg-gray-400/20"></div>
          </div>
          <div className="grid">
            <div>
            <p></p>
            <p></p>
            <p></p>
            </div>
            <div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
