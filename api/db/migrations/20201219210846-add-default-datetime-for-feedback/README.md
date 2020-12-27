# Migration `20201219210846-add-default-datetime-for-feedback`

This migration has been generated by Ryan Doyle at 12/19/2020, 1:08:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Feedback" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201218235508-migration..20201219210846-add-default-datetime-for-feedback
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -37,9 +37,9 @@
 model Feedback {
   id         String   @id @default(uuid())
   type       String
-  createdAt  DateTime
+  createdAt  DateTime @default(now())
   user       User     @relation(fields: [userId], references: [id])
   userId     String
   behavior   Behavior @relation(fields: [behaviorId], references: [id])
   behaviorId String
```

