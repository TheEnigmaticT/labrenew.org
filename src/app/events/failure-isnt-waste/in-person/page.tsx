import type { Metadata } from "next";
import { FailureIsntWasteEventPage } from "@/components/FailureIsntWasteEventPage";
import { failureIsntWasteEvents } from "@/lib/failure-isnt-waste-events";

export const metadata: Metadata = {
  title: "Failure isn't Waste | In-person Workshop | LabReNew",
  description: "Register for LabReNew's in-person Failure isn't Waste workshop on October 8.",
};

export default function InPersonFailureIsntWastePage() {
  return <FailureIsntWasteEventPage event={failureIsntWasteEvents.inPerson} />;
}
