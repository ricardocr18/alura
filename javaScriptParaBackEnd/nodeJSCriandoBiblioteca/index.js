
import fs from 'fs'; //pega o arquivo 
import chalk from 'chalk'; //aqui faz mudar a cor da letra (fonte)

const textoTeste = `São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento , a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API mozGetAsFile() em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).

[Teste de retorno 400. gatinho salsicha](https://httpstat.us/404)
`
function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((http?:\/\/[^\s?#.].[^\s]*)\)/gm;
}

function tratarErro(erro){
    throw new Error(chalk.red(erro.code, 'não ha arquivo no diretório'))
}

//trabalhar função ASSICRONA com async/await também uso try/catch para tratar o erro caso apareça
async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = "utf-8";
        const texto = await fs.promises.readFile (caminhoDoArquivo, encoding)
        console.log(chalk.green(texto))
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
// regex \(http?:\/\/[^\s?#.].[^\s]*\)
//A união dos regex acima por grupo \[([^[\]]*?)\]\((http?:\/\/[^\s?#.].[^\s]*)\)
