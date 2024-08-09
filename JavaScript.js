//criando o heroi

console.log("personagem criado:")

let criandoHeroi = {
    name : "KauanzadaX",
    idade : 19,
    class : "mago"
}

mundo(criandoHeroi)

function mundo(criandoHeroi) {
    console.log(`Bem vindo ao mundo ${criandoHeroi.name}`)
    console.log(`Idade do jogador -> ${criandoHeroi.idade}`)
    console.log(`Sua class -> ${criandoHeroi.class}`)
}

console.log("-------------")

//monstro

console.log("Uma monstro apareceu -> minotauro")

console.log("-------------")

//escolhando poder para atacar

console.log("escolha o ataque para matar minotauro:")

class ataques {
    constructor(ataque1, ataque2, ataque3){
     this.ataque1 = ataque1
     this.ataque2 = ataque2
     this.ataque3 = ataque3
    }
}

let escolhaAtaque = new ataques ("bolo de fogo", "estacas de gelo", "veneno")

escolherAtaque(escolhaAtaque)

function escolherAtaque (escolhaAtaque){  
     console.log(`Escolha ataque -> ${escolhaAtaque.ataque1}`)
     console.log(`Escolha ataque -> ${escolhaAtaque.ataque2}`)
     console.log(`Escolha ataque -> ${escolhaAtaque.ataque3}`)
}

console.log("-------------")

//mensagem final

mesangemFinal(escolhaAtaque)

function mesangemFinal(escolhaAtaque){
     console.log(`O maga KauanzadaX atacou usando ${escolhaAtaque.ataque1}`)
}

console.log("minotauro morreu")