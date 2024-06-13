-- CreateTable
CREATE TABLE "Ingrediente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Receita" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sabor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cookie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estoque" INTEGER NOT NULL,
    "validade" DATETIME NOT NULL,
    "id_ingrediente" INTEGER NOT NULL,
    "id_receita" INTEGER NOT NULL,
    CONSTRAINT "Cookie_id_ingrediente_fkey" FOREIGN KEY ("id_ingrediente") REFERENCES "Ingrediente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cookie_id_receita_fkey" FOREIGN KEY ("id_receita") REFERENCES "Receita" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
