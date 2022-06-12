/*
  Warnings:

  - You are about to drop the column `episodeId` on the `Character` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_episodeId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "episodeId";

-- CreateTable
CREATE TABLE "_CharacterToEpisode" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToEpisode_AB_unique" ON "_CharacterToEpisode"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToEpisode_B_index" ON "_CharacterToEpisode"("B");

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD CONSTRAINT "_CharacterToEpisode_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD CONSTRAINT "_CharacterToEpisode_B_fkey" FOREIGN KEY ("B") REFERENCES "Episode"("id") ON DELETE CASCADE ON UPDATE CASCADE;
