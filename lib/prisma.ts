import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Force Prisma to use the "library" engine (avoids Prisma 7 "client engine" adapter requirement)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
    __internal: { engine: { type: "library" } } as any,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
