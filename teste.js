
const fs = require('fs')

const dadosLivros = JSON.parse( fs.readFileSync('livros.json'))
console.log(dadosLivros)

const novoDado ={id: '3', nome: 'Livro MANERO' }

fs.writeFileSync('livros.json',JSON.stringify([...dadosLivros, novoDado]))


console.log(JSON.parse( fs.readFileSync('livros.json')))


