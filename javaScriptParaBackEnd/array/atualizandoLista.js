// remover qualquer elemento e inclindo qualquer elemento, usando o SPLICE

const listaDeCahamadas = [ 'Ricardo', 'Raquel', 'Bruno', 'Fernanda', "Jorge", 'Zenilda', "Maria"]

//Aqui estou começando a remover do indice 1 do array, 2 elementos e incluindo Dede no array
listaDeCahamadas.splice(1,2,'Dede')

console.log(`Lista de chamadas: ${listaDeCahamadas}`)