let tentativas = 6;
let listaDinamica = [];
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
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] 
            + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] 
            + "</div>" 
        }
    }
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
   if(tentativas > 0)
   {
    mudarStyleLetra("tecla-" + letra);
    comparaListas(letra);
    montarPalavraNaTela();
   }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#C71585";
    document.getElementById(tecla).style.color = '#ffffff';
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca();
        
        if(tentativas == 0)
        {
            abreModal("OPS!", "Perdeu bobão ... A palavra secreta é <br>" + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++)
    {
        if(palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria= false;
        }
    }

    if(vitoria == true)
    {
        abreModal("Parabéns!", "você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("image").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("image").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("image").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("image").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("image").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("image").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("image").style.background = "url('./img/forca.png')";
    }
    
}

function abreModal( titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
    btnReiniciar.addEventListener("click", function(){
        location.reload();
    });



