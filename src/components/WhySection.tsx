import Image from "next/image";
import Link from "next/link";

export function WhySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
              WHY work with LabRenew
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-6">
              We have helped numerous labs produce 100K tonnes less CO2 and save
              25% off their energy bills.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-6 py-3 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border-2 border-lr-blue px-6 py-3 text-[15px] font-semibold text-lr-blue hover:bg-lr-blue hover:text-white transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden bg-lr-dark">
            <iframe
              src="https://www.youtube.com/embed/L5hPvHhsVyc"
              title="LabReNew video"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/lab-pipetting.jpg"
              alt="Automated pipetting into microcentrifuge tubes"
              width={560}
              height={420}
              className="rounded-2xl object-cover w-full"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold text-lr-blue mb-4">
              The goal and mission behind
            </h3>
            <p className="text-[15px] leading-relaxed text-lr-text-muted mb-8">
              We create value for research labs by helping them spend more on
              science and less on waste. We envision a world where research labs
              contribute to a circular economy. Where they don&apos;t waste research
              dollar on waste. Right now, a research lab&apos;s carbon footprint is
              10x that of a office building. A lot of this is due to out-dated
              equipment, incorrectly optimized electrical usage, and lack of
              training. We&apos;re going to change that.
            </p>

            <h3 className="font-heading text-2xl font-bold text-lr-blue mb-4">
              How we got started
            </h3>
            <p className="text-[15px] leading-relaxed text-lr-text-muted">
              After 25 years in the field of energy efficiency, Steven
              Miller&apos;s passion for sustainability took him to Eversource, a
              New England utility conglomerate. There, he proposed new ways to
              promote and incentivize lab energy solutions that have been widely
              adopted in Massachusetts. Along the way, he learned that energy was
              only part of the equation and felt called to act. He founded
              LabReNew in 2022 as a 501(c3) to help labs minimize resource
              consumption, reduce waste generation, and foster a culture of
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
