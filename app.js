const express = require( "express");    //importando o Express
const rotaLivros = require("./rotas/livro")     //Definição de Rotas
const rotaFavoritos = require("./rotas/favoritos")     //Definição de Rotas
const cors = require("cors")

const app = express();                  //nossa aplicação Express

app.use(express.json())                 //Modificando app.js para receber corpo de requisição(body JSON pelo post/patch(no controlador))
app.use(cors({ origin:'*'}))

app.use('/livros', rotaLivros )                 //chamando a rota pela variavel pois os caminhos podem ser alterados, assim mantem se a dinamissidade
app.use('/favoritos', rotaFavoritos )                 //chamando a rota pela variavel pois os caminhos podem ser alterados, assim mantem se a dinamissidade
const port = 8000                               //Definindo a Porta, Assim, o front-end(alura-books) ficará na porta 3000 e o back-end(alura-books-server), na 8000.

//Falando pra aplicação ficar verificando se há alguma requisição
app.listen(port, ()=> {
    console.log(`Escutando a porta: ${port}`);
});   
