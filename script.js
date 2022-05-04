let order = [];
let clickOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const white = document.querySelector('.circle_white')


//Criando ordem aleatória
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i) + 1);
    }
}

//Criando a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    })
}
//Checa se os botões clicados são os mesmos da ordem geranda no jogo
let checkOrder = ()=> {
    for(let i in clickOrder){
        if(clickOrder[i]!= order[i]){
            gameOver();
            break;
        }
    }
    if (clickOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

//Função para o clique do usuário
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');
    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
    })
    checkOrder();
}

//Função que retorna a Cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//Função para o próximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para Game Over
let gameOver = () => {
    alert(`Pontuação: ${score} \n Você PERDEU o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}
//Função de Início do Jogo
let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando novo Jogo!");
    score = 0;

    nextLevel();
}
/*
green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));
*/

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//Início do Jogo
playGame();