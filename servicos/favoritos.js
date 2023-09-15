const fs = require("fs")
const livrosJson = "livros.json"
const favoritosJson = 'favoritos.json'

function getTodosFavoritos(){    
    return JSON.parse( fs.readFileSync("favoritos.json") )
}


function insereNovoFavorito(id){
    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

    const livroInserido = livros.find( livro => livro.id === id)
    const novaListaDeLivrosFavoritos = [...favoritos, livroInserido]
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))    
    
}

function deletaFavoritoId(id){
    let livrosAtuais = getTodosFavoritos()
    const novaLista = livrosAtuais.filter( l => l.id !== id )
    fs.writeFileSync(favoritosJson, JSON.stringify(novaLista)) 
}

function registro(id){
    const livro = getLivroPorId(id)
    return entidade = livro.id + ' - ' + livro.nome
}

function favoritoJaExistente(id){

    const livros = JSON.parse( fs.readFileSync("livros.json") )
    const favoritos = getTodosFavoritos()
    const livro = favoritos.filter(l => l.id === id )
    if(livros){
        return true
    }
    return false
}

module.exports={
    getTodosFavoritos,
    insereNovoFavorito,    
    deletaFavoritoId,
    registro,
    favoritoJaExistente
}