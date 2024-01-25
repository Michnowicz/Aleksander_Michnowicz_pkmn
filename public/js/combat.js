import {allPkmn} from "./_pokemon.js"
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

for (let i = 0; i < 2; i++) {
    let player = events.randomPkmn(allPkmn)
    let cpu = events.randomPkmn(allPkmn)
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
        img.style.height = "400px"
    }
    pkmn.appendChild(img)

}



//textbox
let textDiv = document.createElement("div")
textDiv.classList.add("textDiv")
supraDiv.appendChild(textDiv)