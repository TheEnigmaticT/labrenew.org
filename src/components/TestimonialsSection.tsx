import Image from "next/image";
import Link from "next/link";

const features = [
  "Personalized planning for each client.",
  "Individualized training and implementation plans",
  "Custom built Solutions and partnership development",
  "Documenting results with i2SL & MHL certification tools",
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-lr-neutral">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Testimonial */}
          <div className="relative">
            <Image
              src="/images/lab-tubes.jpg"
              alt="Collection tubes on a blue surface"
              width={560}
              height={420}
              className="rounded-2xl object-cover w-full mb-8"
            />
            <blockquote className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-[15px] leading-relaxed text-lr-text italic">
                &ldquo;From the initial conversation, to building a team and engaging
                in the community at large, Steve has revolutionized how we implement
                sustainable practices.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-lr-text-muted">
                Gloucester, MA
              </p>
            </blockquote>
          </div>

          {/* Features */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
              See how we are making a difference
            </h2>
            <p className="text-[15px] leading-relaxed text-lr-text-muted mb-8">
              Our mission is to remove the barriers to a more sustainable lab.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Image
                    src="/images/check-circle.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[15px] text-lr-text">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-8 py-3.5 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
