const {edGalho, edFolla} = require("./array");

function juntaListas(lista1, listas2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;

    while (posicaoAtualLista1 < lista1.length &&posicaoAtualLista2 < listas2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2){
            listaFinal[atual] = produtoAtualLista1
        }

    }

    return listaFinal
}