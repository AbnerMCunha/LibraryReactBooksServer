//Arquivo de Controladores

//1. importação das Funções, das camadas de Serviço
const {getTodosFavoritos, insereNovoFavorito, deletaFavoritoId, favoritoJaExistente} = require('../servicos/favoritos')
const { validaId } = require('../servicos/livros')


function getFavoritos(req, res){

    try{        
        const Favoritos = getTodosFavoritos()
        res.send(Favoritos)
    }catch(error){
        res.status(500)
        res.send(erro.message)
    } 
}

function postFavorito(req, res){
    
    try{
        const id = req.params.id
        
        /*
        if(!validaId(id)){
            
            console.log('a')
            //return
            //res.status(500)
            //res.send("Id Inválido!")
            //error.message = "Id Inválido!"
            //throw new Error("Id Inválido!");
            throw "Este Livro já foi adicionado aos Favoritos11!"
            
        }
        if(favoritoJaExistente(id)){            
            
            console.log('b')    
            console.error("Este Livro já foi adicionado aos Favoritos!")        
            throw error
            
            //return
            //res.status(500)
            //res.send("Este Livro já foi adicionado aos Favoritos!")
            //throw new Error("Este Livro já foi adicionado aos Favoritos!");
            //error.message = "Este Livro já foi adicionado aos Favoritos!"
        } 

        */
        res.out = 0
        console.log('c')
        insereNovoFavorito(id)
        res.status(200)        
        res.send("Favorito inserido com sucesso!")        
    
    }
    catch(error){

        console.log(' error:  ' + error.name  + ' / ' + res.status() )

        res.status(500)
        res.send(error.message)
    }
}

function deletaFavorito(req, res){

    try{
        const id = req.params.id

        if(!validaId(id)){
            res.status(422)
            res.send("Id Inválido!")
            return
        }
        if(!favoritoJaExistente(id)){
            res.status(422)
            res.send("Favorito Inexistente!")
            return        
        }

        
        deletaFavoritoId(id)
        res.status(200)
        res.send( 'Favorito deletado com sucesso!' )        
    
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports={
    getFavoritos,
    
    postFavorito,
    
    deletaFavorito
}

