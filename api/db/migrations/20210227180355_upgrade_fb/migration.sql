-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "name" TEXT NOT NULL DEFAULT E'Feedback',
ADD COLUMN     "value" INTEGER NOT NULL DEFAULT 1;