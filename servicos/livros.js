const fs = require("fs")

function getTodosLivros(){
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroPorId(id){
    const livros = getTodosLivros()
    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereNovoLivro(novoLivro){
    const livros = getTodosLivros()
    const novaLista = [...livros, novoLivro]    //Spread Operator: Copia dados para a nova lista (fazendo por atribuição direta, ele alterar automaticamente a Lista Original, de acordo com o que for feito com a Nova Lista atribuida(push,pop,etc))
    fs.writeFileSync('livros.json',JSON.stringify(novaLista))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = getTodosLivros()
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)   //FindIndex, serve para achar a posição do elemento que a gente quer, que esta sendo filtrado pelo parametro ID; Se buscar pelo id 1, o index retornado será a posição 0 da Array de TodosOsLivros

    console.log(indiceModificado + ' / ' + id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }
    livrosAtuais[indiceModificado] = conteudoMudado

    //const conteudoMudado = { ...livrosAtuais[id], ...modificacoes }
    //livrosAtuais[id] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroId(id){
    let livrosAtuais = getTodosLivros()
    const novaLista = livrosAtuais.filter( l => l.id !== id )
    fs.writeFileSync('livros.json', JSON.stringify(novaLista)) 
}

function registro(id){
    const livro = getLivroPorId(id)
    return entidade = livro.id + ' - ' + livro.nome
}

function validaId(id){
    if(Number(id) && id){
        return true
    }else{
        return false
    }
}

function idExistente(id){
    const filtro = getLivroPorId(id)
    if(!filtro){
        return false
    }
    return true
}

function validaName(name){    
    if(name){
        return true
    }
    return false
}

module.exports={
    getTodosLivros,
    getLivroPorId,
    insereNovoLivro,
    modificaLivro, 
    deletaLivroId,
    registro,
    validaId,
    idExistente,
    validaName
}