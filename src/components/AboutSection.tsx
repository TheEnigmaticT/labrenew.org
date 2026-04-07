import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-lr-neutral">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/images/lab-petri-dish.jpg"
            alt="Lab technician streaking culture medium in a Petri dish"
            width={560}
            height={420}
            className="rounded-2xl object-cover w-full"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
            About us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-6">
            We are here to support your laboratory
          </h2>
          <p className="text-[15px] leading-relaxed text-lr-text-muted mb-4">
            Labs that aren&apos;t green don&apos;t just hurt the planet. They cost you money.
            Budgets are tighter than ever, and your research dollars are siphoned away by
            your energy, water and heating bills. Old and out-dated equipment wastes time,
            supplies, and even more energy. You can drop your operating overhead by more
            than 12% with our nonprofit&apos;s free guidance.
          </p>
          <p className="text-[15px] leading-relaxed text-lr-text-muted mb-8">
            It doesn&apos;t matter if you&apos;re in a lab of 2 or 200, we can help you
            reduce the energy, water, and consumable materials you use. Big savings for
            your budget and big savings for the planet.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-6 py-3 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border-2 border-lr-blue px-6 py-3 text-[15px] font-semibold text-lr-blue hover:bg-lr-blue hover:text-white transition-colors"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
