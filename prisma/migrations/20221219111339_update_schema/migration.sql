/*
  Warnings:

  - You are about to drop the `SelectedSelectors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SelectedSelectors" DROP CONSTRAINT "SelectedSelectors_datasetId_fkey";

-- DropTable
DROP TABLE "SelectedSelectors";

-- CreateTable
CREATE TABLE "Selectedselectors" (
    "id" SERIAL NOT NULL,
    "datasetId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "Selectedselectors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Selectedselectors" ADD CONSTRAINT "Selectedselectors_datasetId_fkey" FOREIGN KEY ("datasetId") REFERENCES "Dataset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
