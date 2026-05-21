import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const donationTiers = [
  {
    name: "Bronze",
    amount: "$5",
    period: "/month",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "https://buy.stripe.com/6oE8xv4012rf1EYaEI",
  },
  {
    name: "Silver",
    amount: "$25",
    period: "/month",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "https://buy.stripe.com/aEU4hffIJ0j797qcMM",
  },
  {
    name: "Gold",
    amount: "$50",
    period: "/month",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "https://buy.stripe.com/00g3dbbst3vj97q4gh",
    featured: true,
  },
  {
    name: "Platinum",
    amount: "$125",
    period: "/month",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "https://buy.stripe.com/28ocNLdAB4zn5Ve7su",
  },
  {
    name: "Champion",
    amount: "$400",
    period: "/month",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "https://buy.stripe.com/3cs8xv9kl9TH3N6aEH",
  },
];

export const metadata = {
  title: "Donate - LabReNew",
  description:
    "Support LabReNew's mission to help research labs reduce waste and save money.",
};

export default function DonatePage() {
  return (
    <>
      <Header />
      <main>
        {/* Donation Tiers */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-lr-blue mb-4">
                Donate to our cause
              </h1>
              <p className="text-lg text-lr-text-muted max-w-2xl mx-auto">
                Your donation helps labs spend more on science and less on waste.
                LabReNew is a 501(c)(3) nonprofit — all donations are
                tax-deductible.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {donationTiers.map((tier) => (
                <a
                  key={tier.name}
                  href={tier.href}
                  className={`block rounded-xl p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1 ${
                    tier.featured
                      ? "bg-lr-blue text-white ring-2 ring-lr-blue"
                      : "bg-lr-neutral text-lr-dark hover:ring-2 hover:ring-lr-green"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
                      tier.featured ? "text-lr-green" : "text-lr-blue-accent"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`font-heading text-4xl font-bold mb-1 ${
                      tier.featured ? "text-white" : "text-lr-blue"
                    }`}
                  >
                    {tier.amount}
                  </p>
                  <p
                    className={`text-sm mb-4 ${
                      tier.featured ? "text-white/70" : "text-lr-text-muted"
                    }`}
                  >
                    {tier.period}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      tier.featured ? "text-white/80" : "text-lr-text-muted"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <span
                    className={`inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-[15px] font-semibold transition-colors ${
                      tier.featured
                        ? "bg-lr-green text-lr-dark hover:bg-lr-green/90"
                        : "bg-lr-blue text-white hover:bg-lr-blue-light"
                    }`}
                  >
                    Donate Now
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
