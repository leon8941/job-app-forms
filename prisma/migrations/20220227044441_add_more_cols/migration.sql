/*
  Warnings:

  - You are about to drop the column `address` on the `job_applications` table. All the data in the column will be lost.
  - Added the required column `addressLine1` to the `job_applications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLine2` to the `job_applications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "job_applications" DROP COLUMN "address",
ADD COLUMN     "addressLine1" TEXT NOT NULL,
ADD COLUMN     "addressLine2" TEXT NOT NULL;
