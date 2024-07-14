/*
  Warnings:

  - You are about to drop the column `avatar_url` on the `profiles` table. All the data in the column will be lost.
  - You are about to drop the column `auth_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_auth_id_key";

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "profiles" DROP COLUMN "avatar_url";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "auth_id",
DROP COLUMN "username",
ADD COLUMN     "email_verified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT;

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
