# Migration `20201206221653-postgres`

This migration has been generated by Ryan Doyle at 12/6/2020, 2:16:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profileImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
)

CREATE TABLE "UserRole" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Behavior" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Redeemed" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rewardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
)

CREATE TABLE "Reward" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT DEFAULT E'',
    "ownerId" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE TABLE "Enrollment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.uid_unique" ON "User"("uid")

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

ALTER TABLE "UserRole" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Feedback" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Redeemed" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Redeemed" ADD FOREIGN KEY("rewardId")REFERENCES "Reward"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Group" ADD FOREIGN KEY("ownerId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Enrollment" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "Enrollment" ADD FOREIGN KEY("groupId")REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201206221653-postgres
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,84 @@
+datasource DS {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = "native"
+}
+
+// MODELS //
+
+model User {
+  id           String       @id @default(uuid())
+  uid          String       @unique
+  firstName    String
+  lastName     String
+  email        String       @unique
+  profileImage String?
+  createdAt    DateTime     @default(now())
+  updatedAt    DateTime     @default(now())
+  roles        UserRole[]
+  feedback     Feedback[]
+  redeemed     Redeemed[]
+  groups       Group[]
+  enrollments  Enrollment[]
+}
+
+model UserRole {
+  id        String   @id @default(uuid())
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
+  name      String
+  user      User     @relation(fields: [userId], references: [id])
+  userId    String
+}
+
+model Feedback {
+  id        String   @id @default(uuid())
+  type      String
+  createdAt DateTime
+  user      User     @relation(fields: [userId], references: [id])
+  userId    String
+}
+
+model Behavior {
+  id    String @id @default(uuid())
+  name  String
+  value Int
+}
+
+model Redeemed {
+  id        String   @id @default(uuid())
+  user      User     @relation(fields: [userId], references: [id])
+  userId    String
+  reward    Reward   @relation(fields: [rewardId], references: [id])
+  rewardId  String
+  createdAt DateTime @default(now())
+}
+
+model Reward {
+  id       String     @id @default(uuid())
+  name     String
+  cost     Int
+  redeemed Redeemed[]
+}
+
+model Group {
+  id          String       @id @default(uuid())
+  type        String
+  name        String
+  description String?      @default("")
+  owner       User         @relation(fields: [ownerId], references: [id])
+  ownerId     String
+  enrollments Enrollment[]
+}
+
+model Enrollment {
+  id      String @id @default(uuid())
+  user    User   @relation(fields: [userId], references: [id])
+  userId  String
+  group   Group  @relation(fields: [groupId], references: [id])
+  groupId String
+}
```

