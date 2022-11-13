const express = require('express');
const path = require('path');
//inicializando o método de rota do express na variavel router
const router = express.Router();
const basePath = path.join(__dirname, '../templates');

router.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.js`);
})

router.post("/enviar", (requisicao, resposta) => {
    console.log(requisicao.body);
    resposta.sendFile(`${basePath}/contato.html`);
})

module.exports = router;