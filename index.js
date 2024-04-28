const express = require('express');
const app = express();
const PORT = 3000;
const rrhh=require('./src/model/archivo.json')

// Ruta GET básica
app.get('/', (req, res) => {
console.log(`Información de RH`);
res.json(rrhh);
});

// Iniciar el servidor
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});