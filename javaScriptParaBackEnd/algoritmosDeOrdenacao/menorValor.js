
const livros = require("./listaDeLivro")

function menorValor(arrProdutos, poisicaoIncial) {

    let maisBarato = poisicaoIncial;

    for (let atual = poisicaoIncial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;

}

module.exports = menorValor;