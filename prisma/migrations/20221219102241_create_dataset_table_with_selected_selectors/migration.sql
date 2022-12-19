-- CreateTable
CREATE TABLE "Dataset" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "terms" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SelectedSelectors" (
    "id" SERIAL NOT NULL,
    "datasetId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "SelectedSelectors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dataset_name_key" ON "Dataset"("name");

-- AddForeignKey
ALTER TABLE "SelectedSelectors" ADD CONSTRAINT "SelectedSelectors_datasetId_fkey" FOREIGN KEY ("datasetId") REFERENCES "Dataset"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
