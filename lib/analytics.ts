import { sendGAEvent } from "@next/third-parties/google";

type EventParameters = Record<string, string | number | boolean>;

/** Sends a GA4 event without collecting personal data. Client components only. */
export function trackEvent(name: string, parameters: EventParameters) {
  sendGAEvent("event", name, parameters);
}
