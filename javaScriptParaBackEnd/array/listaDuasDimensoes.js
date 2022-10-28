//Aqui nesse exemplo junto dois arrays em um só e depois faço uma pesquisa
const alunos = [ 'Ricardo', 'Raquel', 'Bruno', 'Fernanda']
const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)