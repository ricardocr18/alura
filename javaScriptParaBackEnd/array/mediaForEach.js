// usando o ForEach (callback) para percorre o array e achar a média

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(notas => {
    somaDasNotas += notas
})

let media = somaDasNotas/notas.length

console.log(media)

/*
Alternativa correta! Certo! Enquanto o método forEach não tem um retorno,
o método map() pode retornar um array se a função informada tiver um return em seu escopo.
*/