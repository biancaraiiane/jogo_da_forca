# Jogo da Forca - Estudo e Treinamento

![Captura de tela 2024-10-09 003431](https://github.com/user-attachments/assets/093c6aa4-4dfb-42a7-ba6d-284bc5f2b3a1)

## Sobre o Projeto

Este é um projeto do jogo da forca simples, desenvolvido com **HTML**, **CSS**, **JavaScript** e **Bootstrap**. **Este projeto foi copiado de uma fonte existente** como parte do meu processo de **estudo e aprimoramento** de habilidades em desenvolvimento web.

O jogo da forca é um jogo de adivinhação de palavras onde o jogador precisa tentar acertar letras para descobrir uma palavra secreta. Cada erro do jogador faz com que uma parte de um boneco seja desenhada até ele ser "enforcado" ou até que acerte todas as letras da palavra.

A replicação deste projeto me ajudou a entender melhor o funcionamento de eventos, manipulação do DOM e utilização de bibliotecas como Bootstrap para facilitar o desenvolvimento de interfaces web.

## Funcionalidades

- **Jogo da Forca**: O jogador escolhe letras do teclado para tentar adivinhar a palavra secreta.
- **Interface Interativa**: O uso de Bootstrap para estilizar a interface de maneira responsiva e moderna.
- **Modal de Resultado**: Um modal é exibido com o resultado do jogo (vitória ou derrota).
- **Teclado Interativo**: O teclado é composto de botões que representam as letras do alfabeto, que podem ser clicadas para realizar a escolha de letras.

## Tecnologias Utilizadas

Este projeto foi replicado utilizando as seguintes tecnologias:

- **HTML5**: Estruturação do conteúdo e elementos do jogo.
- **CSS3**: Estilização e layout com foco em responsividade e design.
- **JavaScript (ES6+)**: Manipulação do DOM e controle da lógica do jogo.
- **Bootstrap**: Framework para facilitar a estilização e construção da interface responsiva.
- **Font Awesome**: Ícones sociais e outros elementos visuais.
- **JQuery**: Facilita a manipulação do DOM e gestão dos eventos de forma rápida.

## Código de Destaque

Aqui está uma função importante que verifica se a letra escolhida pelo jogador está correta:

```javascript
function verificaLetraEscolhida(letra) {
    const palavra = 'EXEMPLO'; // Palavra secreta
    const letraEscolhida = letra.toUpperCase();

    if (palavra.includes(letraEscolhida)) {
        // Exibe a letra na posição correta
        mostrarLetra(letraEscolhida);
    } else {
        // Faz algo quando a letra estiver errada
        aumentarTentativa();
    }
}
