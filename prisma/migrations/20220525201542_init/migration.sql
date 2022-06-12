-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "status" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "locationId" INTEGER,
    "image_cover" TEXT NOT NULL,
    "episode" TEXT[],
    "occupation" TEXT NOT NULL,
    "weapons" TEXT[],
    "bandana_color" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(70) NOT NULL,
    "air_date" TEXT NOT NULL,
    "episode" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "producers" TEXT[],
    "characters" TEXT[],
    "image_cover" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "type" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "image_cover" TEXT NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
