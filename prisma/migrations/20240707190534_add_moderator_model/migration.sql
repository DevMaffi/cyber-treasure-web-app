-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'manager', 'contributor', 'viewer');

-- CreateTable
CREATE TABLE "moderators" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "user_id" TEXT NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assigned_by_id" TEXT,

    CONSTRAINT "moderators_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "moderators" ADD CONSTRAINT "moderators_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderators" ADD CONSTRAINT "moderators_assigned_by_id_fkey" FOREIGN KEY ("assigned_by_id") REFERENCES "moderators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
