//Usaremos o FILTER que retorno Boleano (True ou False) na condição que realizamos

let nomes = ['Ricardo', 'Maria', 'Raquel', 'Fernanda']
const notas = [10, 4.5, 8, 7.5]

const reprovados = nomes.filter ( (aluno, indice) => notas[indice] < 5 ) 

console.log(`Reprovados: ${reprovados}`)