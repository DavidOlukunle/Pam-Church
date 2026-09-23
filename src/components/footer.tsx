import Link from "next/link";

const footerLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Story", href: "#our-story" },
  { label: "Leadership", href: "#leadership" },
  { label: "Services", href: "#services" },
  { label: "Prayer & Counselling", href: "#prayer" },
  { label: "Give", href: "#give" },
];

export default function Footer() {
  return (
    <footer className="bg-[#11100f] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-[var(--font-cormorant)] text-4xl text-white"
            >
              PAM
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              PNEUMA ANOINTED MINISTRY — a Christ-centred ministry committed
              to preaching the Gospel, bringing men into the light of Christ,
              and seeing lives transformed.
            </p>

            <p className="mt-6 font-[var(--font-cormorant)] text-xl text-[#b08d57]">
              Truth • Love • Holiness
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Explore
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} PNEUMA ANOINTED MINISTRY (PAM) INC.
            All rights reserved.
          </p>

          <p>
            The Place of Word, Miracle and Transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}