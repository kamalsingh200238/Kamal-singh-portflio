import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-primary">
      <Navbar />
      <div className="lg:container mx-auto px-7">
        <section>
          <h1>Hi, my name is</h1>
          <h2>Kamal Singh.</h2>
          <h3>I build things for the web</h3>

          <div>
            <p>
              I{"'"}m a self-taught Fullstack Developer specializing in web- and
              mobile development.
            </p>
            <p>
              It is my goal to build software which is pleasing to the eye and
              even more pleasing to use.
            </p>
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
