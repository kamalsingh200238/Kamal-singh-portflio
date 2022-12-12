import Link from "next/link";

export default function LinkButton({ displayText, link }) {
  return (
    <Link
      href={link}
      className="link-button focus:outline-none focus:ring-2 focus:ring-secondary"
    >
      <div className="font-fira">{displayText}</div>
    </Link>
  );
}
