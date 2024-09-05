-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "expertise" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_key" ON "User"("user");
