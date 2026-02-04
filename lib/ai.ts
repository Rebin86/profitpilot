import { z } from "zod";

export const CampaignInputSchema = z.object({
  offer: z.string().min(3),
  audience: z.string().min(3),
  goal: z.enum(["calls", "bookings", "leads"]),
  channel: z.enum(["facebook", "google", "both"]),
  tone: z.enum(["direct", "safe", "premium"]),
});

export type CampaignInput = z.infer<typeof CampaignInputSchema>;

export type CampaignOutput = {
  ads: { best: string; variants: string[] };
  landing: { hero: string; bullets: string[]; proof: string; cta: string };
  followUp: { email: string; sms: string; timing: string };
};

export async function generateCampaign(input: CampaignInput): Promise<CampaignOutput> {
  const cta =
    input.goal === "calls" ? "Ring nå" :
    input.goal === "bookings" ? "Book i dag" :
    "Få tilbud";

  return {
    ads: {
      best: `🚀 ${input.offer} – ${cta}. Lokal, rask og enkel prosess.`,
      variants: [
        `Trenger du ${input.offer}? ${cta}.`,
        `Få hjelp med ${input.offer}. ${cta} i dag.`,
        `${input.offer} gjort riktig – ${cta}.`,
      ],
    },
    landing: {
      hero: `${input.offer} – få hjelp i dag`,
      bullets: [
        "Rask respons",
        "Lokal ekspertise",
        "Tydelig pris og neste steg",
      ],
      proof: "⭐ Mange fornøyde kunder",
      cta,
    },
    followUp: {
      timing: "Send etter 1 dag",
      email: `Hei! Ønsker du fortsatt hjelp med ${input.offer}?`,
      sms: `Hei! Trenger du hjelp med ${input.offer}? Svar JA.`,
    },
  };
}
