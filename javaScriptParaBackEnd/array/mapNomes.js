//Aqui vou usar o MAP para pecorre todo o array e trocar por letras maiusculas usando toUpperCase()
let nomes = ['ana Julia', 'Maria lucia', 'Lucia maria']

const nomesAtualizados = nomes.map(nomes => nomes.toUpperCase())

console.log(nomesAtualizados)

/*
Alternativa correta! Certo! Enquanto o método forEach não tem um retorno,
o método map() pode retornar um array se a função informada tiver um return em seu escopo.
*/