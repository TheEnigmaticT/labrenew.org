type EventRegistrationProps = {
  format: "In-person" | "Online";
  lumaEmbedUrl: string;
};

export function EventRegistration({
  format,
  lumaEmbedUrl,
}: EventRegistrationProps) {
  if (!lumaEmbedUrl) {
    return (
      <section
        aria-label={`${format} registration`}
        className="rounded-xl border border-dashed border-lr-blue/30 bg-lr-neutral p-8 text-center"
      >
        <p className="font-heading text-xl font-bold text-lr-blue">
          Registration opens soon
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-lr-text-muted">
          The {format.toLowerCase()} Luma registration form will appear here.
        </p>
      </section>
    );
  }

  return (
    <iframe
      src={lumaEmbedUrl}
      title={`Failure isn’t Waste — ${format} registration`}
      className="min-h-[450px] w-full rounded border border-[#bfcbda88]"
      loading="lazy"
      allow="fullscreen; payment"
      aria-hidden={false}
      tabIndex={0}
    />
  );
}
