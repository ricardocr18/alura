//neste caso estou dividindo a array em 2 grupos usando o SLICE
const nomes =[ 'Ricardo', 'Maria', 'Raquel', 'Danielle', 'Marcelle', 'Bruno','Fernanda',
'Fernando', 'Marcelo', 'Jorge','Zenilda','Zalmir']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log('===================')
console.log(`Alunos da sala 2: ${sala2}`)