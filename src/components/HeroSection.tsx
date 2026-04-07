import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-lr-blue">
            Your lab generates 10x more CO2 than a typical office building.{" "}
            <span className="text-lr-blue">But it doesn&apos;t have to.</span>
          </h1>
          <p className="mt-6 text-lg text-lr-text-muted leading-relaxed">
            Learn how to save the world while you&apos;re saving the world. It&apos;s free.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-8 py-3.5 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
            >
              Save Your Budget Here
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border-2 border-lr-blue px-8 py-3.5 text-[15px] font-semibold text-lr-blue hover:bg-lr-blue hover:text-white transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/hero-lab.jpg"
            alt="Lab technician holding a Petri dish"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
