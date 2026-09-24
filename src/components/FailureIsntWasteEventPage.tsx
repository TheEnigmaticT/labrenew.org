import { EventRegistration } from "@/components/EventRegistration";
import type { FailureIsntWasteEvent } from "@/lib/failure-isnt-waste-events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type FailureIsntWasteEventPageProps = {
  event: FailureIsntWasteEvent;
};

export function FailureIsntWasteEventPage({
  event,
}: FailureIsntWasteEventPageProps) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[760px] px-6 text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-lr-blue">
              LabReNew Workshop
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-lr-blue md:text-5xl">
              Failure isn&apos;t Waste
            </h1>
            <p className="mt-5 text-lg text-lr-text-muted">October 8</p>
            <p className="mt-2 text-[15px] font-semibold text-lr-dark">
              {event.format} event
            </p>
          </div>
        </section>

        <section className="bg-lr-neutral py-12 md:py-16">
          <div className="mx-auto max-w-[640px] px-6">
            <h2 className="mb-6 text-center font-heading text-2xl font-bold text-lr-blue">
              Register
            </h2>
            <EventRegistration
              format={event.format}
              lumaEmbedUrl={event.lumaEmbedUrl}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
