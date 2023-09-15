//Arquivo de Controladores

//1. importação das Funções, das camadas de Serviço
const {getTodosLivros, getLivroPorId, insereNovoLivro, modificaLivro, deletaLivroId, registro, validaId, idExistente,validaName} = require('../servicos/livros')



function getLivros(req, res){
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(erro.message)
    } 
}

function getLivro(req, res){
    try{
        const id = req.params.id

        if(!validaId(id)){
            res.status(422)
            res.send("Id Inválido!")
            return
        }
        if(!idExistente(id)){
            res.status(422)
            res.send("Id Inexistente!")
            return        
        }

        res.status(500)
        res.send(getLivroPorId(id))            

    }catch(error){ 
        res.status(500)
        res.send(erro.message)
    } 
}

function postLivro(req, res){
    try{
        const id = req.params.id
        if(!validaId(id)){
            res.status(422)
            res.send("Id Inválido!")
            return
        }
        if(!idExistente(id)){
            res.status(422)
            res.send("Id Inexistente!")
            return        
        }
        const novoLivro = req.body.nome
        if(!validaName(req.body.nome)){
            res.status(422)
            res.send("Nome nao definidido, tente novamente!")
            return     
        }

        insereNovoLivro(novoLivro)
        res.status(501)
        const entidade = getLivroPorId(id).id + ' - ' + getLivroPorId(id).nome
        res.send("Livro " + entidade + " inserido com sucesso!")
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}


function patchLivro(req, res) {
    try {

        const id = req.params.id
        if(!validaId(id)){
            res.status(422)
            res.send("Id Inválido!")
            return
        }
        if(!idExistente(id)){
            res.status(422)
            res.send("Id Inexistente!")
            return        
        }
        const livroAlterado = req.body.nome
        if(!validaName(livroAlterado)){
            res.status(422)
            res.send("Nome nao definidido, tente novamente!")
            return     
        }

        modificaLivro(livroAlterado, id)        
        res.send("Item modificado com sucesso " + registro(id) )
            
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deletaLivro(req, res){

    try{
        const id = req.params.id

        if(!validaId(id)){
            res.status(422)
            res.send("Id Inválido!")
            return
        }
        if(!idExistente(id)){
            res.status(422)
            res.send("Id Inexistente!")
            return        
        }

        const entidade = getLivroPorId(id).id + ' - ' + getLivroPorId(id).nome
        deletaLivroId(id)
        res.status(200)
        res.send( 'Livro ' + entidade + ' deletado com sucesso!' )        
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports={
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deletaLivro
}

