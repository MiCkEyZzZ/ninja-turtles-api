/*
  Warnings:

  - You are about to drop the column `episode` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `characters` on the `Episode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "episode",
ADD COLUMN     "episodeId" INTEGER,
ALTER COLUMN "bandana_color" DROP NOT NULL,
ALTER COLUMN "affiliation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "characters";

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_episodeId_fkey" FOREIGN KEY ("episodeId") REFERENCES "Episode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
