-- CreateTable
CREATE TABLE "Selector" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "Selector_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Selector_value_key" ON "Selector"("value");
