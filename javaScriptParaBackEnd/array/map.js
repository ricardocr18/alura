//o metodo MAP vai pecorre todo o Array
const notas = [10, 9, 8,7,6]

const notasAtualizadas = notas.map ( nota => 
    nota == 10 ? nota: ++nota)

console.log(notasAtualizadas)

/*
Alternativa correta! Certo! Enquanto o método forEach não tem um retorno,
o método map() pode retornar um array se a função informada tiver um return em seu escopo.
*/