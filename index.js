const express = require('express');
const app = express();

// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación');
});

// Ruta para mostrar los clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' }
  ];
  res.json(clientes);
});

// Ruta para mostrar los productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];
  res.json(productos);
});

// Configuración del puerto de escucha
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
