import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-lr-green/20 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-8">
          Join us and let&apos;s make a better world, today
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-8 py-3.5 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
          >
            Donate Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border-2 border-lr-blue px-8 py-3.5 text-[15px] font-semibold text-lr-blue hover:bg-lr-blue hover:text-white transition-colors"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
