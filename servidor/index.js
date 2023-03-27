const express = require('express');
const conectarDB = require('./config/db');

const app = express();

conectarDB()

app.use(express.json());

app.use('/api/empresas', require('./routes/empresa'));

app.use('/api/empleados', require('./routes/empleado'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})