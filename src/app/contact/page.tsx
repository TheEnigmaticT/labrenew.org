"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const contactCategories = [
  {
    icon: "/images/donations-icon.svg",
    title: "Donations",
    description:
      "Every dollar you donate supports labs in directing more funding toward research rather than waste management.",
    email: "donations@labrenew.org",
  },
  {
    icon: "/images/partnerships-icon.svg",
    title: "Partnerships",
    description:
      "For organizations with sustainable solutions for research environments seeking collaboration.",
    email: "hello@labrenew.org",
  },
  {
    icon: "/images/press-icon.svg",
    title: "Press",
    description: "Media inquiries about LabReNew's community work.",
    email: "media@labrenew.org",
  },
];

const faqs = [
  {
    question: "How can my lab join LabReNew's sustainability initiatives?",
    answer:
      "Connect via social media or discuss sustainable measures with lab management like adjusting fume hood settings.",
  },
  {
    question: "What resources does LabReNew offer for labs going green?",
    answer:
      "Customized plans, government subsidy guidance, and a national partner network supporting labs at their own pace.",
  },
  {
    question: "Is LabReNew only for Eastern Massachusetts?",
    answer:
      "In-person visits limited to Boston, but virtual guidance and nationwide partner resources available everywhere.",
  },
  {
    question: "Are there costs to partner with LabReNew?",
    answer:
      "Not at all. Our services are free to all labs.",
  },
  {
    question: "How can individual researchers contribute?",
    answer:
      "Share LabReNew's materials with colleagues and friends through social channels.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, wire this to an API route or service like Formspree
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-lr-blue mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-lr-text-muted max-w-2xl mx-auto mb-4">
              Get in touch today
            </p>
            <p className="text-[15px] text-lr-text-muted max-w-xl mx-auto italic">
              &ldquo;We&apos;re in our growth year! We want to connect with
              sustainability champions, fiscally minded researchers, mission
              driven executives.&rdquo;
            </p>
          </div>
        </section>

        {/* Contact Categories */}
        <section className="py-12 md:py-16 bg-lr-neutral">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {contactCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white rounded-xl p-8 text-center shadow-sm"
                >
                  <Image
                    src={cat.icon}
                    alt={`${cat.title} icon`}
                    width={56}
                    height={56}
                    className="mx-auto mb-5"
                  />
                  <h3 className="font-heading text-xl font-bold text-lr-dark mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-[15px] text-lr-text-muted mb-4">
                    {cat.description}
                  </p>
                  <a
                    href={`mailto:${cat.email}`}
                    className="text-[15px] font-semibold text-lr-blue hover:text-lr-blue-light transition-colors"
                  >
                    {cat.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[600px] px-6">
            <h2 className="font-heading text-3xl font-bold text-lr-blue text-center mb-8">
              Send us a message
            </h2>

            {submitted ? (
              <div className="text-center py-12 bg-lr-green/10 rounded-xl">
                <Image
                  src="/images/check-circle.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <p className="font-heading text-xl font-bold text-lr-dark">
                  Thanks for reaching out!
                </p>
                <p className="text-[15px] text-lr-text-muted mt-2">
                  We will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-lr-dark mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-lr-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-lr-dark mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-lr-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-lr-dark mb-1.5"
                  >
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-lr-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-lr-dark mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-lr-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-lr-dark mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-border px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-lr-blue resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-lr-blue px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-lr-neutral">
          <div className="mx-auto max-w-[800px] px-6">
            <h2 className="font-heading text-3xl font-bold text-lr-blue text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading text-base font-bold text-lr-dark pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`flex-shrink-0 w-5 h-5 text-lr-blue transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-[15px] leading-relaxed text-lr-text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  )}
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
