const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo');
})

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})