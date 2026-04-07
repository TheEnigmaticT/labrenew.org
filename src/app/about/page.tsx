import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const stats = [
  { value: "2,000", label: "Humans impacted" },
  { value: "25", label: "Collaborators" },
  { value: "$25k", label: "Donations" },
  { value: "75+", label: "Assisted communities" },
];

const team = [
  { name: "KaiTing Yeung", role: "Director of Marketing" },
  { name: "Steven Miller", role: "Founder and Executive Director" },
  { name: "Elle Campbell", role: "CEO" },
];

const board = [
  { name: "Verity Dimock", role: "Board Chair" },
  { name: "Anthony Michetti", role: "Board Member" },
  { name: "John Livermore", role: "Director of Communications and EDI" },
  { name: "Akshat Jhaveri", role: "Director of Fundraising" },
  { name: "Shabnam Naz Ansari", role: "Director of Strategy" },
  { name: "Allison Paradise", role: "Strategic Advisor" },
  { name: "Masha Ushomirsky", role: "Strategic Advisor" },
  { name: "Partha Krishnan, Ph.D", role: "Strategic Advisor" },
  { name: "Trevor Longino", role: "Strategic Advisor" },
  { name: "Barbra Wells", role: "Strategic Advisor" },
  { name: "Lisa Hasan", role: "Strategic Advisor" },
];

const volunteers = [
  { name: "Samuel Major", role: "Volunteer" },
  { name: "Annahita Forghan", role: "Volunteer" },
  { name: "Zhecheng Li", role: "Web Developer" },
];

const interns = [
  { name: "Manohar", role: "Marketing Intern" },
  { name: "Pavani Pingili", role: "Marketing Intern and LinkedIn Coordinator" },
];

const partners = [
  "PHCBI",
  "Sterilis Solutions",
  "My Green Lab",
  "Cell Signaling Technology",
  "1% for the Planet",
  "3Flow",
  "Millennium-Wright Engineering",
  "Prior Clave",
  "Research Recycling",
  "The Greater Sum Foundation",
  "Crowd Tamers",
];

function PersonCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-lr-blue/10 mx-auto mb-4 flex items-center justify-center">
        <span className="font-heading text-xl font-bold text-lr-blue">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <p className="font-heading text-base font-bold text-lr-dark">{name}</p>
      <p className="text-sm text-lr-text-muted mt-1">{role}</p>
    </div>
  );
}

export const metadata = {
  title: "About - LabReNew",
  description:
    "Learn about LabReNew's mission to help research labs integrate sustainability into their operations.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / Mission */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-lr-blue mb-4">
                The mission behind our nonprofit.
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
                  Our mission
                </p>
                <h2 className="font-heading text-3xl font-bold text-lr-blue mb-6">
                  Labs could do more with what they have right now
                </h2>
                <p className="text-[15px] leading-relaxed text-lr-text-muted mb-6">
                  We&apos;re working towards a world where research labs integrate
                  sustainability into their day to day operations without effort.
                  Where literal life-saving budgets aren&apos;t used needlessly for
                  waste management, or literally burned up with high energy
                  consumption. We&apos;re working towards a research environment that
                  is carbon-neutral, energy-efficient, and pollution-free.
                </p>
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-lg bg-lr-blue px-6 py-3 text-[15px] font-semibold text-white hover:bg-lr-blue-light transition-colors"
                >
                  Donate now
                </Link>
              </div>
              <div>
                <Image
                  src="/images/lab-flasks.jpg"
                  alt="Laboratory flasks"
                  width={560}
                  height={420}
                  className="rounded-2xl object-cover w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h2 className="font-heading text-3xl font-bold text-lr-blue mb-6">
                  Our mission is to remove the barriers to a more sustainable lab.
                </h2>
                <p className="text-[15px] leading-relaxed text-lr-text-muted mb-6">
                  Laboratories in today&apos;s world have more work than ever before,
                  inventing new medicines, novel diagnostic tools, and discovering
                  new treatments to make our lives better. That&apos;s just their
                  work inside the lab. Lab managers must also hire staff, balance
                  budgets and secure funding. They want to save energy, lower their
                  carbon footprint, and create less waste, but they just don&apos;t
                  know where to start. That&apos;s what LabReNew is all about.
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/steven-portrait.png"
                    alt="Steven Miller"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-heading font-bold text-lr-dark">
                      Steven Miller
                    </p>
                    <p className="text-sm text-lr-text-muted">Founder</p>
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <Image
                  src="/images/lab-petri-dish.jpg"
                  alt="Lab technician working"
                  width={560}
                  height={420}
                  className="rounded-2xl object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Land Acknowledgement */}
        <section className="py-16 md:py-20 bg-lr-neutral">
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-lr-blue mb-6">
              Land Acknowledgement
            </h2>
            <p className="text-[15px] leading-relaxed text-lr-text-muted">
              LabReNew acknowledges that our work in Massachusetts takes place on
              the traditional lands of the{" "}
              <em>Massachusett</em>, <em>Nipmuc</em>, and{" "}
              <em>Wampanoag</em> peoples. We recognize their ongoing relationship
              with this land and honor their resilience and care for the
              environment over generations. As we support labs in reducing their
              environmental impact, we are learning how sustainability work must
              also include respect for Indigenous communities and knowledge. This
              acknowledgement is a small step in a longer journey of learning and
              accountability.
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-24 bg-lr-blue text-white">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-lr-green mb-2">
              Our results
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
              We help labs save the world, one researcher at a time
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-5xl font-bold text-lr-green">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[15px] text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/steve-photo.jpg"
                alt="Steven Miller, Founder of LabReNew"
                width={560}
                height={420}
                className="rounded-2xl object-cover w-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-lr-blue-accent mb-2">
                Our Founder&apos;s story
              </p>
              <h2 className="font-heading text-3xl font-bold text-lr-blue mb-6">
                Why did Steve start LabReNew?
              </h2>
              <p className="text-[15px] leading-relaxed text-lr-text-muted mb-6">
                I started LabReNew while I was working for Eversource, a large
                electric and gas utility in New England as their point person on
                life science sustainability. At that time I was really involved
                with helping my clients lower their energy costs, being smarter and
                lowering their climate impact. One day, I was watching my grandsons
                play, and I was just overwhelmed by the idea of what the world
                would be like when they were adults. It was that moment that I knew
                I had to do more, and be more for them. For all of our grandkids.
              </p>
              <p className="text-[15px] leading-relaxed text-lr-text-muted mb-6">
                That&apos;s the moment that I decided to start a non-profit
                dedicated to changing how research labs use their energy, their
                water, and their waste. We help, we guide, we empower, we save the
                planet with you!
              </p>
              <Image
                src="/images/signature.png"
                alt="Steven Miller's signature"
                width={200}
                height={60}
                className="opacity-80"
              />
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-lr-neutral">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
                Meet our Team
              </h2>
              <p className="text-[15px] text-lr-text-muted max-w-2xl mx-auto">
                LabReNew is powered by our volunteers and staff members so we can
                grow throughout Eastern Massachusetts!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {team.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Board */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
                Meet our Board of Advisors
              </h2>
              <p className="text-[15px] text-lr-text-muted max-w-2xl mx-auto">
                You&apos;re only as strong as your team, and we&apos;re lucky to
                have a whole band of rockstars backing our efforts to save the
                world while you save the world.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {board.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Volunteers */}
        <section className="py-16 md:py-24 bg-lr-neutral">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
                Meet our Volunteers
              </h2>
              <p className="text-[15px] text-lr-text-muted max-w-2xl mx-auto">
                We&apos;re nothing without our volunteers — you&apos;re the
                fearless squad turning goodwill into real-world change, tackling
                every task with heart, hustle, and a can-do attitude.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {volunteers.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Interns */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
                Meet our Interns
              </h2>
              <p className="text-[15px] text-lr-text-muted max-w-2xl mx-auto">
                We&apos;re powered by our interns — the eager innovators diving in
                headfirst, learning on the fly, and bringing fresh ideas (and
                endless enthusiasm) to every project.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {interns.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 md:py-24 bg-lr-neutral">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-lr-blue mb-4">
              Our Partners
            </h2>
            <p className="text-[15px] text-lr-text-muted max-w-2xl mx-auto mb-12">
              Amazing partners that move our cause forward
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-lr-dark shadow-sm"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
