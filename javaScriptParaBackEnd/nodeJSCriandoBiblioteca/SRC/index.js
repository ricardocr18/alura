
import fs from 'fs'; //pega o arquivo 
import chalk from 'chalk'; //aqui faz mudar a cor da letra (fonte)

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[1]]: captura[2] }))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'não ha arquivo no diretório'))
}

//trabalhar função ASSICRONA com async/await também uso try/catch para tratar o erro caso apareça
async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch (erro) {
        tratarErro(erro)
    }

}

//aqui só estou exportanto uma função por isso utilizo o default
export default pegarArquivo;

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



// regex \[[^[\]]*?\]
// regex \(https?:\/\/[^\s?#.].[^\s]*\)
//A união dos regex acima por grupo \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
