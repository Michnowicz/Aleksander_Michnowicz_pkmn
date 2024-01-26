import {allPkmn} from "./_pokemon.js"
import * as events from "./_function.js"

let pkmnSelector = document.createElement("div")
pkmnSelector.classList.add("pkmnSelector")
document.body.appendChild(pkmnSelector)
pkmnSelector = document.querySelector(".pkmnSelector")

//////////////////// pokemon selection ////////////////////
let title = document.createElement("div")
title.classList.add("title")
pkmnSelector.appendChild(title)
title = document.querySelector(".title")

let h1 = document.createElement("h1")
h1.innerText = "Pokemon"
title.appendChild(h1)

let p = document.createElement("p")
p.innerText = "Select your pokemon"
title.appendChild(p)

//////////////////// pokemon selection ////////////////////

let supraContainer = document.createElement("div")
supraContainer.classList.add("supraContainer")
pkmnSelector.appendChild(supraContainer)
supraContainer = document.querySelector(".supraContainer")


allPkmn.forEach(pkmn => {
    //div foreach pkmn
    let container = document.createElement("div")
    container.classList.add("container")
    container.setAttribute("name", pkmn.name)
    supraContainer.appendChild(container)
    container = supraContainer.querySelector(".container:last-of-type")
    //name
    let p = document.createElement("p")
    p.innerText = pkmn.name
    container.appendChild(p)
    //img
    let img = document.createElement("img")
    img.src = pkmn.srcFront
    container.appendChild(img)

});


supraContainer.addEventListener("mouseover", events.selectHoverIn)
supraContainer.addEventListener("mouseout", events.selectHoverOut)
//supraContainer.addEventListener("click", events.selectClick)

let test = supraContainer.addEventListener("click", events.selectClick)
