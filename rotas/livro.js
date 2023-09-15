//Arquivo de Rotas 
// A responsabilidade do router é reagir a cada tipo de ação HTTP em um determinado path, e não fazer um try/catch, verificar por erros e decidir o que deve ser retornado.

//Itens Basicos:
//1. Importação do express que é o coração das nossas rotas
const { Router } = require("express")   //Importação do Roteamento, refere-se à definição de caminhos para areas do aplicativo (URIs) para funcionalidades no site.
//2. Definição de que esse arquivo gerencia nossas rotas para os produtos.
const router = Router()                 
             
//3. Importação das Operações, nas camada de controladores 
const { getLivros, getLivro, postLivro, patchLivro, deletaLivro } = require("../controladores/livro")      

//4.1 Definição d2 rotas baseado nas Operações HTTP
router.get('/', getLivros )

//4.2 definição da Rotas que utiliza params para operar
router.get('/:id', getLivro )

router.post( '/', postLivro )

router.patch('/:id', patchLivro)

router.delete( '/:id' , deletaLivro )


//5. Exporação de Rotas, para utilização do App.js
module.exports = router