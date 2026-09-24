import type { Metadata } from "next";
import { FailureIsntWasteEventPage } from "@/components/FailureIsntWasteEventPage";
import { failureIsntWasteEvents } from "@/lib/failure-isnt-waste-events";

export const metadata: Metadata = {
  title: "Failure isn't Waste | Online Workshop | LabReNew",
  description: "Register for LabReNew's online Failure isn't Waste workshop on October 8.",
};

export default function OnlineFailureIsntWastePage() {
  return <FailureIsntWasteEventPage event={failureIsntWasteEvents.online} />;
}
