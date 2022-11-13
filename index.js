const path = require("path");
const express = require("express");
//app esta incializando o express
const app = express();
const basePath = path.join(__dirname, 'templates');

app.listen(5000, () => {
    console.log("Servidor iniciado na porta 5000...")
})

//Middleware para o express poder ler o corpo do html.
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get("/", (req, resposta) => {
    //resposta vai enviar um arquivo para o endereço "/"
    resposta.sendFile(`${basePath}/index.html`);
})

//transformar o que enviar em json.
app.use(express.json());

//importando as rotas do modulo pagina inicial que criamos
const inicio = require('./pagina_inicial');
app.use('/', inicio);

//importando as rotas do modulo da pagina de cadastro que criamos
const cadastro = require('./cadastro');
app.use('/cadastro', cadastro);

const contato = require('./contato');
app.use('/contato', contato);