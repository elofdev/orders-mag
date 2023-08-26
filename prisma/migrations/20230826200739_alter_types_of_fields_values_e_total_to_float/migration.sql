/*
  Warnings:

  - You are about to alter the column `tax` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,4)`.
  - You are about to alter the column `saleValue` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `valueWithTax` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `valueWithoutTax` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `totalValueWithTax` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `totalValueWithoutTax` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `tax` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,4)`.

*/
-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "tax" SET DATA TYPE DECIMAL(5,4);

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "saleValue" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valueWithTax" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "valueWithoutTax" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalValueWithTax" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "totalValueWithoutTax" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "tax" SET DATA TYPE DECIMAL(5,4);
