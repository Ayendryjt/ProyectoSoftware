const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/define-goal', (req, res) => {
    const employee = req.body.employee;
    const goal = req.body.goal;

    // Aquí implementarías la lógica para guardar los datos en la base de datos

    res.send('Objetivo definido para ' + employee + ': ' + goal);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
