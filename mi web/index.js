const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// 1. Servir archivos estáticos directamente desde la carpeta donde esté este archivo
app.use(express.static("public"));

// 2. Ruta para entregar el index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Servidor activo en el puerto " + PORT);
});
