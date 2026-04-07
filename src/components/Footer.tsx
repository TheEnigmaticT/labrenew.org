import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-lr-dark text-white py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="LabReNew"
              width={160}
              height={53}
              className="h-12 w-auto mb-4 rounded"
            />
            <nav className="flex flex-wrap gap-4 mt-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="text-center">
            <h3 className="font-heading text-xl font-bold mb-4">
              Join us and let&apos;s make a better world, today
            </h3>
            <div className="flex justify-center gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg bg-lr-green px-6 py-2.5 text-sm font-semibold text-lr-dark hover:bg-lr-green/90 transition-colors"
              >
                Donate now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                More ways to help
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-white/50">
              &copy; {new Date().getFullYear()} LabReNew. All rights reserved.
            </p>
            <p className="text-sm text-white/50 mt-2">
              501(c)(3) Nonprofit Organization
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
