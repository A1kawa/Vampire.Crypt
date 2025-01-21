var botao01 = document.getElementById("button1")
var botao02 = document.getElementById("button2")
var botao03 = document.getElementById("button3")
var botao04 = document.getElementById("button4")
var botao05 = document.getElementById("button5")
var botao06 = document.getElementById("button6")
var NextPage01 = ""
var NextPage02 = ""
var NextPage03 = ""
var NextPage04 = ""
var NextPage05 = ""
var NextPage06 = ""
var minus
var txtp = document.getElementById("txt")

function ResetButtonsInt() {
    botao01.style.visibility = 'hidden'
    botao02.style.visibility = 'hidden'
    botao03.style.visibility = 'hidden'
    botao04.style.visibility = 'hidden'
    botao05.style.visibility = 'hidden'
    botao06.style.visibility = 'hidden'
}


async function RollDiceChar(RollNbm) {
    let resultado01 = ""
    let resultado02 = ""
    switch (RollNbm) {
        case 1:
            document.getElementById("roll01").style.visibility = "hidden"
            DiceAnim = "HabDice"
            RollDice()
            resultado01 = DiceResult
            await Rolar()
            const Habilidade = (resultado01 + 6)
            document.getElementById("Hplayer").innerHTML = `<img id="HabDice" src="dados/${resultado01}.png" class="DiceChar">+ 6 =<strong>${Habilidade}</strong>`
            document.getElementById("roll02").style.visibility = "visible"
            sessionStorage.setItem("HabUsuario", Number.parseInt(Habilidade))
            localStorage.setItem("HabCurrent", Number.parseInt(Habilidade))
            break;

        case 2:
            document.getElementById("roll02").style.visibility = "hidden"
            DiceAnim = "EneDice01"
            RollDice()
            resultado01 = DiceResult
            await Rolar()
            document.getElementById("Eplayer").innerHTML = 
            `<img id="EneDice01" src="dados/${resultado01}.png" class="DiceChar">+<img id="EneDice02" src="dados/1.png" class="DiceChar">+ 12 =`
            DiceAnim = "EneDice02"
            RollDice()
            resultado02 = DiceResult
            await Rolar()
            const Energia = (resultado01 + resultado02 + 12)
            document.getElementById("Eplayer").innerHTML = 
            `<img id="EneDice01" src="dados/${resultado01}.png" class="DiceChar">+<img id="EneDice02" src="dados/${resultado02}.png" class="DiceChar">+ 12 =<strong>${Energia}</strong>`
            document.getElementById("roll03").style.visibility = "visible"
            sessionStorage.setItem("EneUsuario", Number.parseInt(Energia))
            localStorage.setItem("EneCurrent", Number.parseInt(Energia))
            break;

        case 3:
            document.getElementById("roll03").style.visibility = "hidden"
            DiceAnim = "SorDice"
            RollDice()
            resultado01 = DiceResult
            await Rolar()
            const Sorte = (resultado01 + 6)
            document.getElementById("Splayer").innerHTML = `<img id="SorDice" src="dados/${resultado01}.png" class="DiceChar">+ 6 =<strong>${Sorte}</strong>`
            document.getElementById("roll04").style.visibility = "visible"
            sessionStorage.setItem("SorUsuario", Number.parseInt(Sorte))
            localStorage.setItem("SorCurrent", Number.parseInt(Sorte))
            break;
            
        case 4:
            document.getElementById("roll04").style.visibility = "hidden"
            DiceAnim = "FeDice"
            RollDice()
            resultado01 = DiceResult
            await Rolar()
            const Fe = (resultado01 + 3)
            document.getElementById("Fplayer").innerHTML = `<img id="FeDice" src="dados/${resultado01}.png" class="DiceChar">+ 3 =<strong>${Fe}</strong>`
            sessionStorage.setItem("FeUsuario", Number.parseInt(Fe))
            localStorage.setItem("FeCurrent", Number.parseInt(Fe))
            botao01.style.visibility = 'visible'
            break;
    }
    
}

async function attChar() {
        let Hab = sessionStorage.getItem("HabUsuario")
        let Ene = sessionStorage.getItem("EneUsuario")
        let Sor = sessionStorage.getItem("SorUsuario")
        let Fe = sessionStorage.getItem("FeUsuario")
        let HabCur = localStorage.getItem("HabCurrent")
        let EneCur = localStorage.getItem("EneCurrent")
        let SorCur = localStorage.getItem("SorCurrent")
        let FeCur = localStorage.getItem("FeCurrent")
        if (Aumentou == false) {
            document.getElementById("folha").style.backgroundColor = "firebrick"
            await delay(300)
            document.getElementById("folha").style.backgroundColor = "#00000029"
        } else {
            document.getElementById("folha").style.backgroundColor = "aquamarine"
            await delay(300)
            document.getElementById("folha").style.backgroundColor = "#00000029"
        }
        document.getElementById("folha").style.visibility = 'visible'
        document.getElementById("FolhaContent").innerHTML = 
        `Habilidade<br>
        <strong>${Hab}</strong> : ${HabCur}<br>
        Energia<br>
        <strong>${Ene}</strong> : ${EneCur}<br>
        Sorte<br>
        <strong>${Sor}</strong> : ${SorCur}<br>
        Fé<br>
        <strong>${Fe}</strong> : ${FeCur}`
}



//Funcao de botao de interacao 01, na primeira pagina limpa o conteudo e salva as caracteristicas iniciais do personagem, assim como o nome
function Continua01() {
    if (pagNmb == 0) {
        const MyName = document.getElementById("NameInput").value
        if (MyName.trim() === "") {
            alert("Por favor, nos dê o seu nome.")
            return;
        }
        localStorage.setItem("FimCombate", 0)
        sessionStorage.setItem("nomeUsuario", MyName)
        document.getElementById("conteudo").innerHTML = `<p id="txt"></p>`
        txtp = document.getElementById("txt")
        attChar()
        pagNmb = 1 //326
        txtp.innerHTML = 
        `${pagTxt[pagNmb]}<br>
        ${pagNmb}`
        Paginas()
    } else if (combate == true) {
        loopEterno()
        abrirpopup()
    } else if (NextPage01 == 401) {
    } else if (prov == true) {
        minus = true
    } else {
    pagNmb = NextPage01
    Paginas()
        if (PersonalizarTexto == true) {
            console.log("o texto default foi mudado")
        } else {
            txtp.innerHTML = 
            `${pagTxt[pagNmb]}<br>
            ${pagNmb}`
        }
    }
}
//Funcao de botao de interacao 02
function Continua02() {
    pagNmb = NextPage02
    Paginas()
        if (PersonalizarTexto == true) {
            console.log("o texto default foi mudado")
        } else {
            txtp.innerHTML = 
            `${pagTxt[pagNmb]}<br>
            ${pagNmb}`
        }
}
//Funcao de botao de interacao 03
function Continua03() {
    pagNmb = NextPage03
    Paginas()
        if (PersonalizarTexto == true) {
            console.log("o texto default foi mudado")
        } else {
            txtp.innerHTML = 
            `${pagTxt[pagNmb]}<br>
            ${pagNmb}`
        }
}
//Funcao de botao de interacao 04
function Continua04() {
    pagNmb = NextPage04
    Paginas()
        if (PersonalizarTexto == true) {
            console.log("o texto default foi mudado")
        } else {
            txtp.innerHTML = 
            `${pagTxt[pagNmb]}<br>
            ${pagNmb}`
        }
}
//Funcao de botao de interacao 05
function Continua05() {
    pagNmb = NextPage05
    Paginas()
        if (PersonalizarTexto == true) {
            console.log("o texto default foi mudado")
        } else {
            txtp.innerHTML = 
            `${pagTxt[pagNmb]}<br>
            ${pagNmb}`
        }
}
//Funcao de botao de interacao 06 e botao para testes de dado
async function Continua06() {
    if (TestesDados01 == true) {
        ResetButtonsInt()
        let displaydado = document.getElementById("DadoTeste")
        if (Addition > 0) {
            displaydado.innerHTML = `<img id= "DadoDeTeste01" src="dados/1.png" class="DadoDeTeste"> + ${Addition}`
        } else {
            displaydado.innerHTML = `<img id= "DadoDeTeste01" src="dados/1.png" class="DadoDeTeste">`
        }
        DiceAnim = "DadoDeTeste01"
        RollDice()
        await Rolar()
        document.getElementById("DadoDeTeste01").src = `dados/${DiceResult}.png`
        await delay(1000)
        Compare = DiceResult + Addition
        displaydado.innerHTML = `<h1>${Compare}</h1>`
        displaydado.style.backgroundColor = "aquamarine"
        await delay(200)
        displaydado.style.backgroundColor = ""
        await delay(2000)
        displaydado.innerHTML = ``
        Paginas()
    } else if (TestesDados02 == true){
        ResetButtonsInt()
        let Dice01
        let Dice02
        let displaydado = document.getElementById("DadoTeste")
        displaydado.innerHTML = `<img id= "DadoDeTeste01" src="dados/1.png" class="DadoDeTeste"> + <img id= "DadoDeTeste02" src="dados/1.png" class="DadoDeTeste">`
        DiceAnim = "DadoDeTeste01"
        RollDice()
        Dice01 = DiceResult
        await Rolar()
        document.getElementById("DadoDeTeste01").src = `dados/${Dice01}.png`
        DiceAnim = "DadoDeTeste02"
        RollDice()
        Dice02 = DiceResult
        await Rolar()
        document.getElementById("DadoDeTeste02").src = `dados/${Dice02}.png`
        await delay(1000)
        Compare = Dice01 + Dice02
        displaydado.innerHTML = `${Compare}`
        displaydado.style.backgroundColor = "aquamarine"
        await delay(200)
        displaydado.style.backgroundColor = ""
        await delay(2000)
        if (Compare <= TestesDadosComparativo) {
            displaydado.innerHTML = `Sucesso!`
            displaydado.style.backgroundColor = "aquamarine"
            await delay(200)
            displaydado.style.backgroundColor = ""
        }else{
        displaydado.innerHTML = `Fracasso!`
        displaydado.style.backgroundColor = "firebrick"
        await delay(200)
        displaydado.style.backgroundColor = ""
        }
        await delay(2000)
        displaydado.innerHTML = ``
        Paginas()
    } else {
        pagNmb = NextPage06
        Paginas()
            if (PersonalizarTexto == true) {
                console.log("o texto default foi mudado")
            } else {
                txtp.innerHTML = 
                `${pagTxt[pagNmb]}<br>
                ${pagNmb}`
            }
    }
}
//sim eu podia ter feito switch e cases mas... eh isso ai

// Função para abrir o popup de combate
function abrirpopup() {
    // Define o conteúdo do iframe (arquivo externo)
    document.getElementById("popupIframe").src = "combate.html";
    // Exibe o popup e o fundo escuro
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function loopEterno() {
    const intervalo = setInterval(() => {
        if (localStorage.getItem("FimCombate") > 0) {
            clearInterval(intervalo); // Para o loop
            console.log("Loop foi parado.");
            HoverOutClose()
            if (localStorage.getItem("FimCombate") == 2) {
                hidePopup()
            }
            return;
        }
        console.log("Loop está rodando...");
    }, 1000); // Roda a cada 1 segundo
}

function HoverOutClose() {
    if (localStorage.getItem("FimCombate") == 1) {
        document.getElementsByClassName('fechar')[0].innerHTML = 'Voce ganhou o combate!'
        document.getElementsByClassName('fechar')[0].style.backgroundColor = 'black'    
    } else {
        document.getElementsByClassName('fechar')[0].innerHTML = 'Termine o combate para continuar'
        document.getElementsByClassName('fechar')[0].style.backgroundColor = '#362222'
    }
}
function HoverInClose() {
    if (localStorage.getItem("FimCombate") == 1) {
        document.getElementsByClassName('fechar')[0].innerHTML = 'Continuar com o terror!'
        document.getElementsByClassName('fechar')[0].style.backgroundColor = '#373737'       
    } else {
        document.getElementsByClassName('fechar')[0].innerHTML = 'Termine o combate para continuar'
        document.getElementsByClassName('fechar')[0].style.backgroundColor = '#362222'
    }

}
// Função para esconder o popup
function hidePopup() {
    if (localStorage.getItem("FimCombate") >= 1) {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    // Limpa o conteúdo do iframe (opcional, para evitar recarregar desnecessário)
    document.getElementById("popupIframe").src = "";
    Paginas()
    attChar()
    } else {
        console.log("Algo deu errado")
    }
}

//Funcao que rola o dado e retorna em "DiceResult" o valor
function RollDice(){
DiceResult = Math.floor(Math.random() * 6) + 1
}

//Funcao que cria delay de tempo determinado quando a funcao eh chamada
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Funcao que anima por 1.5 segundos o dado ao rolar
async function Rolar() {
    let contador = 0;
    // Loop para simular o comportamento do setInterval
    while (contador <= 15) {
        RollDice(); // Atualiza o resultado do dado
        document.getElementById(DiceAnim).src = `dados/${DiceResult}.png`;

        contador++; // Incrementa o contador
        await delay(100); // Aguarda 100ms antes de repetir
    }
}