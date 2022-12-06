import Link from "next/link";

export default function LinkButton({ displayText, link }) {
  return (
    <Link
      href={link}
      className="relative block rounded-sm border border-secondary px-6 py-2 text-secondary transition-all duration-200 ease-in-out before:absolute before:left-0 before:bottom-0 before:z-10 before:h-0 before:w-0 before:border-rose-100 before:transition-all before:duration-200 before:ease-in-out after:absolute after:right-0 after:top-0 after:z-10 after:h-0 after:w-0 after:border-rose-100 after:transition-all after:duration-200 after:ease-in-out hover:text-rose-100 before:hover:h-full before:hover:w-full before:hover:border-l-2 before:hover:border-b-2 after:hover:h-full after:hover:w-full after:hover:border-r-2 after:hover:border-t-2 max-md:mt-8 max-md:px-10"
    >
      <div className="font-fira">{displayText}</div>
    </Link>
  );
}
