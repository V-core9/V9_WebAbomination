-- AlterTable
ALTER TABLE "User" ADD COLUMN "active" BOOLEAN DEFAULT true;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT,
    "published" BOOLEAN DEFAULT false,
    "title" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL DEFAULT '',
    "metaKeywords" TEXT NOT NULL DEFAULT '',
    "content" TEXT DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "renderMode" TEXT NOT NULL DEFAULT 'html',
    "authorId" INTEGER,
    "thumbnail" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content", "createdAt", "id", "metaDescription", "metaKeywords", "published", "renderMode", "slug", "thumbnail", "title", "updatedAt") SELECT "authorId", "content", "createdAt", "id", "metaDescription", "metaKeywords", "published", "renderMode", "slug", "thumbnail", "title", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "metaDescription" TEXT NOT NULL DEFAULT '',
    "metaKeywords" TEXT NOT NULL DEFAULT '',
    "content" TEXT DEFAULT '',
    "published" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "renderMode" TEXT NOT NULL DEFAULT 'html',
    "authorId" INTEGER,
    "thumbnail" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Page_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Page" ("authorId", "content", "createdAt", "id", "metaDescription", "metaKeywords", "published", "renderMode", "slug", "thumbnail", "title", "updatedAt") SELECT "authorId", "content", "createdAt", "id", "metaDescription", "metaKeywords", "published", "renderMode", "slug", "thumbnail", "title", "updatedAt" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
