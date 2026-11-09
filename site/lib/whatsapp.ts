import { business } from "@/content/business";

type Options = {
  /** A specific service to enquire about. */
  service?: string;
  /** Fully custom message (overrides `service`). */
  message?: string;
};

const DEFAULT_MESSAGE = `Hello ${business.name}, I would like to book an appointment.`;

/** Central WhatsApp link builder. All appointment CTAs go through here. */
export function whatsappUrl({ service, message }: Options = {}): string {
  const text =
    message ??
    (service
      ? `Hello ${business.name}, I would like to enquire about ${service}.`
      : DEFAULT_MESSAGE);
  return `${business.whatsapp.url}?text=${encodeURIComponent(text)}`;
}

export type BookingDetails = {
  name: string;
  phone: string;
  service: string;
  date?: string;
  message?: string;
};

/** Builds the prefilled booking message for the contact form. */
export function bookingMessage(d: BookingDetails): string {
  const lines = [
    `Hello ${business.name}, I would like to book an appointment.`,
    "",
    `Name: ${d.name}`,
    `Phone: ${d.phone}`,
    `Service: ${d.service}`,
  ];
  if (d.date) lines.push(`Preferred date: ${d.date}`);
  if (d.message) lines.push(`Message: ${d.message}`);
  return lines.join("\n");
}
