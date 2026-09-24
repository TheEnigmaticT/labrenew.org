export type FailureIsntWasteEvent = {
  format: "In-person" | "Online";
  lumaEmbedUrl: string;
  path: string;
};

/**
 * Paste each event's Luma *embed* URL here when it is available.
 * Expected format: https://lu.ma/embed/event/... (not the public event URL).
 */
export const failureIsntWasteEvents = {
  inPerson: {
    format: "In-person",
    lumaEmbedUrl: "https://luma.com/embed/event/evt-PQ8gOnD1C7Dp8dB/simple",
    path: "/events/failure-isnt-waste/in-person",
  },
  online: {
    format: "Online",
    lumaEmbedUrl: "https://luma.com/embed/event/evt-YschSUKbUDWbpWs/simple",
    path: "/events/failure-isnt-waste/online",
  },
} satisfies Record<string, FailureIsntWasteEvent>;
