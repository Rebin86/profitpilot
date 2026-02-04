import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";
import { CampaignInputSchema, generateCampaign } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = (session?.user as any)?.id as string | undefined;

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized (missing userId in session)" },
        { status: 401 }
      );
    }

    const raw = await req.json();
    const input = CampaignInputSchema.parse(raw);

    // 1) Sjekk at brukeren har credits
    const ent = await prisma.entitlement.findUnique({ where: { userId } });
    if (!ent || ent.credits <= 0) {
      return NextResponse.json({ error: "PAYWALL" }, { status: 402 });
    }

    // 2) Generer output
    const output = await generateCampaign(input);

    // 3) Lagre kampanjen
    const saved = await prisma.campaign.create({
      data: {
        userId,
        title: `${input.offer} (${input.goal})`,
        inputJson: JSON.stringify(input),
        outputJson: JSON.stringify(output),
      },
    });

    // 4) Trekk 1 credit (sikker metode: trekk bare hvis credits > 0)
    const dec = await prisma.entitlement.updateMany({
      where: { userId, credits: { gt: 0 } },
      data: { credits: { decrement: 1 } },
    });

    // Hvis noe rart skjer (race condition), stopp og gi paywall
    if (dec.count !== 1) {
      return NextResponse.json({ error: "PAYWALL" }, { status: 402 });
    }

    return NextResponse.json({ campaignId: saved.id, output });
  } catch (err: any) {
    // Hvis zod-validering feiler, gi 400 med lesbar tekst
    if (Array.isArray(err?.issues)) {
      const msg = err.issues
        .map((i: any) => `${i.path.join(".")}: ${i.message}`)
        .join(", ");
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    return NextResponse.json(
      { error: err?.message ?? "Internal Server Error", name: err?.name },
      { status: 500 }
    );
  }
}
