import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/images/energy-efficient.svg",
    title: "Energy Efficient Practices",
    description:
      "We evaluate each lab's processes to custom design the best energy efficiencies to employ in their lab.",
  },
  {
    icon: "/images/water-conservation.svg",
    title: "Water Conservation",
    description:
      "From of aerators to reduce water flow to using water-efficient autoclaves & glass washers, small savings add up.",
  },
  {
    icon: "/images/green-chemistry.svg",
    title: "Green Chemistry",
    description:
      "We have partnered with many green chemistry providers so that our clients have the most up to date access to the most modern chemical catalogs.",
  },
  {
    icon: "/images/recycling.svg",
    title: "Recycling & Waste Reduction",
    description:
      "We connect you with premier recycling partners for your unique workflow, reducing costs and waste.",
  },
  {
    icon: "/images/green-behavior.svg",
    title: "Green Behavior",
    description:
      "Often, saving money is just about changing behaviors. We create a customized training plan that fits with your research, culture, and goals.",
  },
  {
    icon: "/images/green-chemistry.svg",
    title: "And More!",
    description:
      "Whatever your problem, we have a solution for it. Contact us today if you are interested.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent">
            How we help
          </p>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-lr-blue mb-4">
          What are we doing to assist these laboratories?
        </h2>
        <div className="text-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-6 py-3 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
          >
            Contact Us
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-lr-neutral rounded-xl p-8 hover:shadow-md transition-shadow"
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={56}
                height={56}
                className="mb-5"
              />
              <h3 className="font-heading text-xl font-bold text-lr-dark mb-3">
                {service.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-lr-text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
