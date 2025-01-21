var Dice01 = ""
var Dice02 = ""
var DiceAnim = ""
var EnmAttackForce = ""
var SelfAttackForce = ""
var ConditionSeries = 0
var HabUsuario
var EneUsuario
var SorUsuario
var HabEnemy
var EneEnemy
var Ganhou
var CondicaoDano = false
var vezes

window.onload = function BeginCombat() {
    const nomeUsuario = sessionStorage.getItem("nomeUsuario")
    const nomeInimigo = sessionStorage.getItem("nomeInimigo")
    localStorage.setItem("FimCombate", 0) //Determina que o combate comecou e nao pode ser parado ate ser resolvido
    HabUsuario = Number.parseInt(localStorage.getItem("HabCurrent"))
    EneUsuario = Number.parseInt(localStorage.getItem("EneCurrent"))
    SorUsuario = Number.parseInt(localStorage.getItem("SorCurrent"))
    HabEnemy = Number.parseInt(sessionStorage.getItem("HabEnemy"))
    EneEnemy = Number.parseInt(sessionStorage.getItem("EneEnemy"))
    if (localStorage.getItem("CondicaoDano") > 0) {
        CondicaoDano = true
        vezes = localStorage.getItem("CondicaoDano")
    }

document.getElementById("EnemyName").innerHTML = nomeInimigo
document.getElementById("EnemyChar").innerHTML = `Habilidade: ${HabEnemy} <br>
Energia: ${EneEnemy}`
document.getElementById("SelfName").innerHTML = nomeUsuario
document.getElementById("SelfChar").innerHTML = `Habilidade: ${HabUsuario} <br>
Energia: ${EneUsuario}`
}



async function TestarGanhador(){
    if (EnmAttackForce > SelfAttackForce) {
        Ganhou = false
        document.getElementById('Dano').innerText = 'Receber o que é meu'
        if (SorUsuario <= 0) {
            document.getElementById('Testar').style.visibility = "hidden"
            document.getElementsByClassName("alert")[0].innerHTML = 
            `Você perdeu esta rodada.`
        } else {
        document.getElementsByClassName("alert")[0].innerHTML = 
        `Você perdeu esta rodada.<br>
        Gostaria de testar sua sorte?
        (Você perderá 1 de Sorte)`
        }
        document.getElementsByClassName("sorte")[0].style.visibility = "visible"
        document.getElementsByClassName("alert")[1].innerHTML = 
        `Sua Sorte é ${SorUsuario}`
    } else if (EnmAttackForce < SelfAttackForce) {
        Ganhou = true
        document.getElementById('Dano').innerText = 'Infringir dano natural'
        if (SorUsuario <= 0) {
            document.getElementById('Testar').style.visibility = "hidden"
            document.getElementsByClassName("alert")[0].innerHTML = 
            `Você ganhou esta rodada.`
        } else {
        document.getElementsByClassName("alert")[0].innerHTML = 
            `Você ganhou esta rodada.<br>
            Gostaria de testar sua sorte?
            (Você perderá 1 de Sorte)`
        }
        document.getElementsByClassName("sorte")[0].style.visibility = "visible"
        document.getElementsByClassName("alert")[1].innerHTML = 
        `Sua Sorte é ${SorUsuario}`
    } else {
        document.getElementsByClassName("alert")[0].innerHTML = 
        `Ninguem ganhou esta rodada.<br>`
        await delay(2000)
        document.getElementById("BR01").style.visibility = "visible"
        document.getElementsByClassName("alert")[0].innerHTML = ""
    }
}
async function TestarSorteCombate() {
    document.getElementsByClassName("alert")[0].innerHTML = ``
    document.getElementsByClassName("SorteDados")[0].style.visibility = "visible"
    document.getElementsByClassName("SorteDados")[1].style.visibility = "visible"
    document.getElementsByClassName("sorte")[0].style.visibility = "hidden"

    RollDice()
    Dice01 = DiceResult
    RollDice()
    Dice02 = DiceResult
    console.log(Dice01, Dice02)
    DiceAnim = "SorteDice01"
    await Rolar()
    document.getElementById("SorteDice01").src = `dados/${Dice01}.png`
    DiceAnim = "SorteDice02"
    await Rolar()
    document.getElementById("SorteDice02").src = `dados/${Dice02}.png`
    if (Dice01 + Dice02 <= SorUsuario) {
        SorUsuario--
        document.getElementsByClassName("alert")[1].innerHTML = 
        `Você teve sorte!<br>
        Sua Sorte é ${SorUsuario} agora.`
        await delay(2000)
        if (Ganhou == true) {
            await ReceberDano(4, "ele")
        } else {
            if (CondicaoDano == true) {
                vezes--
            }
            await ReceberDano(1, "eu")
        }
    } else {
        SorUsuario--
        document.getElementsByClassName("alert")[1].innerHTML = 
        `Você foi azarado e será penalizado.!<br>
        Sua Sorte é ${SorUsuario} agora.`
        await delay(2000)
        if (Ganhou == true) {
            await ReceberDano(1, "ele")
        } else {
            if (CondicaoDano == true) {
                vezes--
            }
            await ReceberDano(3, "eu")
        }
    }
}
async function NaoTestar() {
    if (Ganhou == false) {
        if (CondicaoDano == true) {
            vezes--
            console.log("vezes diminuidas")
        }
        await ReceberDano(2, "eu")
    } else {
        await ReceberDano(2, "ele")
    }
}


async function ReceberDano(quanto, quem) {
    document.getElementsByClassName("alert")[0].innerHTML = ``
    document.getElementsByClassName("alert")[1].innerHTML = ``
    document.getElementsByClassName("SorteDados")[0].style.visibility = "hidden"
    document.getElementsByClassName("SorteDados")[1].style.visibility = "hidden"
    document.getElementsByClassName("sorte")[0].style.visibility = "hidden"

    let contador = 0
    if (quem == "eu") {
        while (contador < quanto){
            EneUsuario--
            await delay(500)
            document.getElementsByClassName("Jogador")[0].style.backgroundColor = "rgb(255, 167, 167)"
            document.getElementById("SelfChar").innerHTML = 
            `Habilidade: ${HabUsuario} <br>
            Energia: ${EneUsuario}`
            await delay(100)
            document.getElementsByClassName("Jogador")[0].style.backgroundColor = ""
            contador++
            }
    } else {
        while (contador < quanto){
            EneEnemy--
            await delay(500)
            document.getElementsByClassName("inimigo")[0].style.backgroundColor = "rgb(255, 167, 167)"
            document.getElementById("EnemyChar").innerHTML = 
            `Habilidade: ${HabEnemy} <br>
            Energia: ${EneEnemy}`
            await delay(100)
            document.getElementsByClassName("inimigo")[0].style.backgroundColor = ""
            contador++
        }
    }
    if (localStorage.getItem("CondicaoSerieAtaque") > 0) {
        console.log("percebido condicao serie e ela eh " + localStorage.getItem("CondicaoSerieAtaque"))
        quanto = localStorage.getItem("CondicaoSerieAtaque")
        contador = 0
        while (contador < quanto){
            console.log("dando dano de serie " + quanto + " vezes")
            EneUsuario--
            await delay(500)
            document.getElementsByClassName("Jogador")[0].style.backgroundColor = "rgb(255, 167, 167)"
            document.getElementById("SelfChar").innerHTML = 
            `Habilidade: ${HabUsuario} <br>
            Energia: ${EneUsuario}`
            await delay(100)
            document.getElementsByClassName("Jogador")[0].style.backgroundColor = ""
            contador++
            }     
    }
    if (EneEnemy <= 0) {
        console.log("Inimigo morto")
        console.log("Terminando combate")
        localStorage.setItem("FimCombate", 1)
        localStorage.setItem("HabCurrent", HabUsuario)
        localStorage.setItem("EneCurrent", EneUsuario)
        localStorage.setItem("SorCurrent", SorUsuario)
    } else if (EneUsuario <= 0) {
        localStorage.setItem("HabCurrent", HabUsuario)
        localStorage.setItem("EneCurrent", EneUsuario)
        localStorage.setItem("SorCurrent", SorUsuario)
        console.log("Eu morri")
        localStorage.setItem("FimCombate", 2)
    } else {
        localStorage.setItem("HabCurrent", HabUsuario)
        localStorage.setItem("EneCurrent", EneUsuario)
        localStorage.setItem("SorCurrent", SorUsuario)
        if (CondicaoDano == true) {
            if (vezes == 0) {
                sessionStorage.setItem("EneEnemy", EneEnemy)
                localStorage.setItem("CondicaoDano", 0)
                localStorage.setItem("FimCombate", 2)
            } else if (vezes > 0)
                document.getElementById("BR01").style.visibility = "visible"
        } else {
            document.getElementById("BR01").style.visibility = "visible"
        }
    }
}



function hoveron(Which) {
    let divAlvo1 = document.getElementsByClassName("AtkForce")[0]
    let divAlvo2 = document.getElementsByClassName("AtkForce")[1]
    let legenda = document.getElementById("legenda1")
    switch (Which) {

        case 1:
            legenda.style.display = "block";
            // Atualizar a posição da legenda conforme o movimento do mouse
            divAlvo1.addEventListener("mousemove", (e) => {
                const rect = divAlvo1.getBoundingClientRect(); // Obter posição da div
                const offsetX = e.clientX //- rect.left; // Posição do mouse relativa à div
                const offsetY = e.clientY //- rect.top;
        
                // Atualizar posição da legenda
                legenda.style.left = `${offsetX + 10}px`; // 10px para afastar do cursor
                legenda.style.top = `${offsetY + 10}px`;
            });
            break;
        case 2:
            legenda.style.display = "block";
            // Atualizar a posição da legenda conforme o movimento do mouse
            divAlvo2.addEventListener("mousemove", (e) => {
                const rect = divAlvo2.getBoundingClientRect(); // Obter posição da div
                const offsetX = e.clientX //- rect.left; // Posição do mouse relativa à div
                const offsetY = e.clientY //- rect.top;
        
                // Atualizar posição da legenda
                legenda.style.left = `${offsetX + 10}px`; // 10px para afastar do cursor
                legenda.style.top = `${offsetY + 10}px`;
            });
            break;
    }

}
function hoverout() {
    document.getElementById("legenda1").style.display = "None"
}
/*
function fechar() {
    sessionStorage.setItem("HabCurrent", HabUsuario)
    sessionStorage.setItem("EneCurrent", EneUsuario)
    sessionStorage.setItem("SorCurrent", SorUsuario)
}
*/

//Funcao que rola e anima a rolagem de dados especificamente do combate
async function RollDiceCombat() {
    document.getElementById("BR01").style.visibility = "hidden"
    RollDice()
    Dice01 = DiceResult
    RollDice()
    Dice02 = DiceResult
    console.log(Dice01, Dice02)
    DiceAnim = "EnmDice01"
    await Rolar()
    document.getElementById("EnmDice01").src = `dados/${Dice01}.png`
    DiceAnim = "EnmDice02"
    await Rolar()
    document.getElementById("EnmDice02").src = `dados/${Dice02}.png`
    EnmAttackForce = (Dice01 + Dice02 + HabEnemy)
    document.getElementById("EnemyAF").innerHTML = 
    `FA Inimiga<br>
    <strong>${EnmAttackForce}</strong>`

    RollDice()
    Dice01 = DiceResult
    RollDice()
    Dice02 = DiceResult
    DiceAnim = "SelfDice01"
    await Rolar()
    document.getElementById("SelfDice01").src = `dados/${Dice01}.png`
    DiceAnim = "SelfDice02"
    await Rolar()
    document.getElementById("SelfDice02").src = `dados/${Dice02}.png`
    SelfAttackForce = (Dice01 + Dice02 + HabUsuario)
    document.getElementById("SelfAF").innerHTML =
    `Sua FA<br>
    <strong>${SelfAttackForce}</strong>`
    TestarGanhador()
}


