
import fs from 'fs'; //pega o arquivo 
import chalk from 'chalk'; //aqui faz mudar a cor da letra (fonte)

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, 'não ha arquivo no diretório'))
}

//trabalhar função ASSICRONA com async/await também uso try/catch para tratar o erro caso apareça
async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        const texto = await fs.promises.readFile (caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto))
    } catch (erro) {
        tratarErro(erro)
    }
        
}

//trabalhar a função de modo Assicrono - PROMISES COM THEN()
// function pegarArquivo(caminhoDoArquivo) {
//         const encoding = "utf-8";
//         fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(tratarErro)
// }

//ESSA É A VERSÃO SICRONA
// function pegarArquivo(caminhoDoArquivo) {
//     const encoding = "utf-8";
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             tratarErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// };

pegarArquivo('./arquivo/texto.md');

// regex \[[^[\]]*?\]
// regex \(https?:\/\/[^\s?#.].[^\s]*\)
//A união dos regex acima por grupo \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
