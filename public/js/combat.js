import {Technique, allPkmn} from "./_pokemon.js"
import * as events from "./_function.js"

//////////////////// combat phase ////////////////////
let supraDiv = document.createElement("div")
supraDiv.classList.add("supraDiv")
document.body.appendChild(supraDiv)
supraDiv = document.querySelector(".supraDiv")


////////// combat phase //////////

//combat screen
let screen = document.createElement("div")
screen.classList.add("screen")
supraDiv.appendChild(screen)

let player = events.randomPkmn(allPkmn)
let cpu = events.randomPkmn(allPkmn) 
do {
    cpu = events.randomPkmn(allPkmn) 
} while (cpu == player);

for (let i = 0; i < 2; i++) {
    let screen = document.querySelector(".screen")

    let fighter = document.createElement("div")
    fighter.classList.add("fighter")
    screen.appendChild(fighter)
    fighter = screen.querySelector(".fighter:last-of-type")

    let ui = document.createElement("div")
    ui.classList.add("ui")
    fighter.appendChild(ui)
    ui = fighter.querySelector(".ui:last-of-type")

    let uiDiv = document.createElement("div")
    uiDiv.classList.add("uiDiv")
    ui.appendChild(uiDiv)
    uiDiv = ui.querySelector(".uiDiv:last-of-type")

    let p = document.createElement("p")
    if (i == 0) {
        p.innerText = cpu.name
    } else if (i == 1) {
        p.innerText = player.name 
    }
    uiDiv.appendChild(p)
   

    let progressBar = document.createElement("div")
    progressBar.classList.add("progressBar")
    uiDiv.appendChild(progressBar)
    progressBar = uiDiv.querySelector(".progressBar:last-of-type")

    let progress = document.createElement("div")
    progress.classList.add("progress")
    progressBar.appendChild(progress)

    let life = document.createElement("p")
    life.classList.add("life")
    if (i == 0) {
        life.innerText = `pv: ${cpu.lp} / ${cpu.lpMax}`
    } else {
        life.innerText = `pv: ${player.lp} / ${player.lpMax}`
    }
    
    uiDiv.appendChild(life)


    let pkmn = document.createElement("div")
    pkmn.classList.add("pkmn")
    fighter.appendChild(pkmn)
    pkmn = fighter.querySelector(".pkmn:last-of-type")

    let img = document.createElement("img")
    if (i == 0) {
        img.src = cpu.srcFront
        img.style.height = "150px"
    } else if (i == 1) {
        img.src = player.srcBack
        img.style.height = "300px"
    }
    pkmn.appendChild(img)

}



//textbox
let textDiv = document.createElement("div")
textDiv.classList.add("textDiv")
supraDiv.appendChild(textDiv)
textDiv = supraDiv.querySelector(".textDiv")

let textBox = document.createElement("div")
textBox.classList.add("textBox")
textDiv.appendChild(textBox)
textBox = textDiv.querySelector(".textBox")

let combatText = document.createElement("p")
combatText.innerText = "Un pokemon sauvage apparait."
combatText.classList.add("combatText")
textBox.appendChild(combatText)

let btnNext = document.createElement("img")
btnNext.classList.add("btnNext", "hidden")
btnNext.src = "./public/sprites/enterWhite.png"
textBox.appendChild(btnNext)


let atkDiv = document.createElement("div")
atkDiv.classList.add("atkDiv")
textDiv.appendChild(atkDiv)
atkDiv = textDiv.querySelector(".atkDiv")

for (let i = 0; i < 4; i++) {
    let atkBox = document.createElement("div")
    atkBox.classList.add("atkBox")
    atkBox.innerText = `${player.techniques[i].name}`
    atkDiv.appendChild(atkBox)
    atkBox = atkDiv.querySelector(".atkBox:last-of-type")
}

atkDiv.addEventListener("click", (e) => {
    //style au clique
    if (e.target.className == "atkBox") {
        e.target.style.backgroundColor = "rgb(3, 3, 3)"
        var flag = true
        let test = setInterval(() => {
            e.target.style.backgroundColor = "rgb(29, 29, 29)"
            clearInterval(test)
        }, 100);
        test
    }
    //attaque joueur
    if (player.lp > 0) {
        if(e.target == document.querySelector(".atkBox:nth-of-type(1)")) {
            player.attaque(player.techniques[0], cpu)
            btnNext.classList.toggle("hidden")
        } else if (e.target == document.querySelector(".atkBox:nth-of-type(2)")) {
            player.attaque(player.techniques[1], cpu)
            btnNext.classList.toggle("hidden")
        } else if (e.target == document.querySelector(".atkBox:nth-of-type(3)")) {
            player.attaque(player.techniques[2], cpu)
            btnNext.classList.toggle("hidden")
        } else {
            player.attaque(player.techniques[3], cpu)
            btnNext.classList.toggle("hidden")
        }
        if (cpu.lp == 0) {
            combatText.innerText = `${cpu.name} est vaincu.`
            atkDiv.style.pointerEvents = "none"
            btnNext.classList.toggle("hidden")
            document.style.pointerEvents = "none"
        }
    }
    //attaque ennemie
    if (cpu.lp > 0) {
        atkDiv.style.pointerEvents = "none"
        document.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                cpu.randomAttaque(player)
                document.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        combatText.innerText = 'Choisissez une attaque.'
                        atkDiv.style.pointerEvents = "all"
                    }
                    btnNext.classList.toggle("hidden")
                }, { once: true })
            } 
        }, { once: true }) 
    }
    if (player.lp == 0) {
        combatText.innerText = `${player.name} est vaincu.`
        atkDiv.style.pointerEvents = "none"
        btnNext.classList.toggle("hidden")
        document.style.pointerEvents = "none"
    }
})
