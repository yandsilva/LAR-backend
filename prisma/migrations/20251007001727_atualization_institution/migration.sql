/*
  Warnings:

  - You are about to drop the column `facebook` on the `Institution` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `Institution` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Institution` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Institution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "about" TEXT,
    "image" TEXT,
    "url" TEXT,
    "socialLinks" JSONB,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Institution" ("about", "email", "id", "image", "name", "password", "phone", "url") SELECT "about", "email", "id", "image", "name", "password", "phone", "url" FROM "Institution";
DROP TABLE "Institution";
ALTER TABLE "new_Institution" RENAME TO "Institution";
CREATE UNIQUE INDEX "Institution_email_key" ON "Institution"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
