import Link from "next/link";

const navbarLinks = [
  {
    id: "01",
    link: "",
    displayName: "About",
  },
  {
    id: "02",
    link: "",
    displayName: "Work",
  },
  {
    id: "03",
    link: "",
    displayName: "Contact",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="flex ">
        {/* Logo */}
        <div className="">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.69873 26.732L50 3.4641L90.3013 26.732V73.268L50 96.5359L9.69873 73.268V26.732Z"
              stroke="black"
              stroke-width="6"
            />
            <path
              d="M37.201 67V32.0909H43.5249V48.1307H43.951L57.5703 32.0909H65.2919L51.7919 47.7557L65.4112 67H57.809L47.3942 52.0341L43.5249 56.6023V67H37.201Z"
              fill="black"
            />
          </svg>
        </div>

        {/* navbar links */}
        <div className="">
          <ul>
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.link}>
                  <span>{link.id}. </span>
                  <span>{link.displayName}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href={"/"}>Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
