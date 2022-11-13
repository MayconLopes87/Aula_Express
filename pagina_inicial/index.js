const express = require('express');
const path = require('path');
//inicializando o método de rota do express na variavel router
const router = express.Router();
const basePath = path.join(__dirname, '../templates');

router.get('/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`);
});

module.exports = router;