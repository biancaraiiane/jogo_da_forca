let palavraSecretaCategoria;
let palavraSecretaSorteada;


const palavras =  [
    palavra001={
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "ENROLADOS",
        categoria: "FILME"
    },
    palavra004={
        nome: "BARBIE",
        categoria: "FILME"
    },
    palavra005={
        nome: "ELEVADOR",
        categoria: "MÚSICA"
    },
    palavra006={
        nome: "GARGANTA",
        categoria: "MÚSICA"
    },
    palavra007={
        nome: "LASANHA",
        categoria: "COMIDA"
    },
    palavra008={
        nome: "MACARRONADA",
        categoria: "COMIDA"
    },
    palavra009={
        nome: "LARANJA",
        categoria: "COR"
    },
    palavra010={
        nome: "CINZA",
        categoria: "COR"
    }
];


criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
 
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}



