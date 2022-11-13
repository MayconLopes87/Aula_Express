const express = require('express');
const path = require('path');
//inicializando o método de rota do express na variavel router
const router = express.Router();
const basePath = path.join(__dirname, '../templates');

router.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
});

router.post('/enviar', (req, res) => {
    console.log(req.body);
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router;