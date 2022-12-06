import Link from "next/link";
import LinkButton from "./LinkButton";

const navbarLinks = [
  {
    link: "/",
    displayName: "About",
  },
  {
    link: "/",
    displayName: "Work",
  },
  {
    link: "/",
    displayName: "Contact",
  },
];

export default function NavbarLinks({ isOpen }) {
  return (
    <aside
      className={`${
        isOpen ? "" : "max-md:translate-x-full"
      } grid place-items-center transition-all duration-200 ease-in-out max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:w-2/3 max-md:bg-primary-800 `}
    >
      <nav className="flex items-center justify-center gap-6 text-sm max-md:flex-col lg:gap-8">
        <ol className="flex items-center justify-center gap-6 max-md:flex-col lg:gap-8">
          {navbarLinks.map((link, index) => (
            <li key={link.displayName}>
              <Link href={link.link} className="group block">
                <div className="relative flex items-center justify-center py-2 after:absolute after:inset-y-0 after:left-0 after:h-full after:w-0 after:border-b-2 after:transition-all after:duration-200 after:ease-in-out hover:after:w-full max-md:flex-col md:gap-2">
                  <span className="font-fira text-secondary">
                    {String("0" + (index + 1)).slice(-2)}.
                  </span>
                  <span className="text-primary-300 transition-all duration-200 ease-in-out group-hover:text-secondary">
                    {link.displayName}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <LinkButton link={"/"} displayText={"Resume"} />
      </nav>
    </aside>
  );
}
