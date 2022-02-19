-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revision" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("authorId", "content", "created", "id", "published", "revision", "slug", "title", "updated") SELECT "authorId", "content", "created", "id", "published", "revision", "slug", "title", "updated" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
CREATE TABLE "new_Page" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN DEFAULT false,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "revision" BOOLEAN DEFAULT false,
    "authorId" INTEGER,
    CONSTRAINT "Page_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Page" ("authorId", "content", "created", "id", "published", "revision", "slug", "title", "updated") SELECT "authorId", "content", "created", "id", "published", "revision", "slug", "title", "updated" FROM "Page";
DROP TABLE "Page";
ALTER TABLE "new_Page" RENAME TO "Page";
CREATE UNIQUE INDEX "Page_slug_key" ON "Page"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
