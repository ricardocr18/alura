const livros = require("./listaDeLivro")

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`oi ${livros[maisBarato].preco}`)
//console.log(`o livro mais barato custa ${livros[maisBarato].preco} r`)