import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const donationTiers = [
  {
    name: "Bronze",
    amount: "$100",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "#", // Replace with Stripe Payment Link
  },
  {
    name: "Silver",
    amount: "$300",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "#",
    featured: true,
  },
  {
    name: "Gold",
    amount: "$500",
    description:
      "Every dollar you donate goes towards helping labs devote more money to research and lose less to waste.",
    href: "#",
  },
  {
    name: "Custom Amount",
    amount: "You choose",
    description: "Select your own custom amount to donate.",
    href: "#",
  },
];

const auditProducts = [
  {
    name: "Low Cost/No Cost Item Checklist",
    price: "$15",
    href: "#",
  },
  {
    name: "Low Cost/No Cost Item Checklist",
    price: "$25",
    href: "#",
  },
  {
    name: "Low Cost/No Cost Item Checklist",
    price: "$35",
    href: "#",
  },
  {
    name: "Sustainable Inventory Audit",
    price: "$40",
    href: "#",
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    className={`font-heading text-4xl font-bold mb-4 ${
                      tier.featured ? "text-white" : "text-lr-blue"
                    }`}
                  >
                    {tier.amount}
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

        {/* Audit Products */}
        <section className="py-16 md:py-24 bg-lr-neutral">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
                Sustainable Inventory Audit
              </h2>
              <p className="text-lg text-lr-text-muted max-w-2xl mx-auto">
                Tools and checklists to help your lab get started on the path to
                sustainability.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {auditProducts.map((product, i) => (
                <a
                  key={i}
                  href={product.href}
                  className="block bg-white rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Image
                    src="/images/check-circle.svg"
                    alt=""
                    width={40}
                    height={40}
                    className="mx-auto mb-4"
                  />
                  <p className="font-heading text-lg font-bold text-lr-dark mb-2">
                    {product.name}
                  </p>
                  <p className="font-heading text-3xl font-bold text-lr-blue mb-4">
                    {product.price}
                  </p>
                  <span className="inline-flex items-center justify-center rounded-lg bg-lr-green px-6 py-2.5 text-[15px] font-semibold text-lr-dark hover:bg-lr-green/90 transition-colors">
                    Donate Now
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services repeat */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-12">
              What are we doing to assist these laboratories?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "/images/energy-efficient.svg",
                  title: "Energy Efficient Practices",
                },
                {
                  icon: "/images/water-conservation.svg",
                  title: "Water Conservation",
                },
                { icon: "/images/green-chemistry.svg", title: "Green Chemistry" },
                { icon: "/images/recycling.svg", title: "Recycling & Waste Reduction" },
                { icon: "/images/green-behavior.svg", title: "Green Behavior" },
                { icon: "/images/green-chemistry.svg", title: "And More!" },
              ].map((s) => (
                <div key={s.title} className="flex items-center gap-4 p-4">
                  <Image
                    src={s.icon}
                    alt={`${s.title} icon`}
                    width={48}
                    height={48}
                    className="flex-shrink-0"
                  />
                  <p className="font-heading text-lg font-bold text-lr-dark">
                    {s.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
