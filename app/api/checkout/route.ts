import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { stripe } from "@/lib/stripe";

export async function POST() {
  console.log("Stripe key prefix:", (process.env.STRIPE_SECRET_KEY ?? "").slice(0, 12));
  const session = await getServerSession(authOptions);
  const userId = (session?.user as any)?.id as string | undefined;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // One-time payment: 49 NOK for 1 ekstra kampanje
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "nok",
          unit_amount: 4900, // 49.00 NOK
          product_data: {
            name: "1 ekstra kampanje (ProfitPilot)",
          },
        },
        quantity: 1,
      },
    ],
    // Vi bruker metadata for å vite hvem som betalte
    metadata: {
      userId,
      credits: "1",
    },
    success_url: "http://localhost:3000/upgrade/success",
    cancel_url: "http://localhost:3000/upgrade",
  });

  return NextResponse.json({ url: checkoutSession.url });
}
