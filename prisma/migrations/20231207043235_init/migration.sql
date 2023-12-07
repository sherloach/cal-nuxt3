-- CreateTable
CREATE TABLE "EventType" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "EventType_pkey" PRIMARY KEY ("id")
);
