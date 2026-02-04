-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Entitlement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "credits" INTEGER NOT NULL DEFAULT 1,
    "plan" TEXT NOT NULL DEFAULT 'free',
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "subscriptionStatus" TEXT,
    "currentPeriodEnd" DATETIME,
    CONSTRAINT "Entitlement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Entitlement" ("credits", "currentPeriodEnd", "id", "plan", "stripeCustomerId", "stripeSubscriptionId", "subscriptionStatus", "userId") SELECT "credits", "currentPeriodEnd", "id", "plan", "stripeCustomerId", "stripeSubscriptionId", "subscriptionStatus", "userId" FROM "Entitlement";
DROP TABLE "Entitlement";
ALTER TABLE "new_Entitlement" RENAME TO "Entitlement";
CREATE UNIQUE INDEX "Entitlement_userId_key" ON "Entitlement"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
