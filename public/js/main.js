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
    let pName = document.createElement("p")
    pName.classList.add("pName")
    pName.innerText = pkmn.name
    container.appendChild(pName)

    //atk
    let pAtk = document.createElement("p")
    pAtk.classList.add("pAtk")
    pAtk.innerText = `ATK : ${pkmn.atk}`
    container.appendChild(pAtk)
    //def
    let pDef = document.createElement("p")
    pDef.classList.add("pDef")
    pDef.innerText = `DEF : ${pkmn.def}`
    container.appendChild(pDef)
    //vit
    let pVit = document.createElement("p")
    pVit.classList.add("pVit")
    pVit.innerText = `VIT : ${pkmn.speed}`
    container.appendChild(pVit)
    
    //img
    let img = document.createElement("img")
    img.src = pkmn.art
    container.appendChild(img)
});


supraContainer.addEventListener("mouseover", events.selectHoverIn)
supraContainer.addEventListener("mouseout", events.selectHoverOut)

supraContainer.addEventListener("click", (e) => {
    var choice = ""
    if (e.target.className.includes("container")) {
        e.target.classList.toggle("PkmnClick")
        // hide select screen
        document.body.querySelector(".pkmnSelector").classList.toggle("hidden")
        choice = e.target.getAttribute("name")
    } else if (e.target.localName == "img" || e.target.localName == "p") {
        e.target.parentElement.classList.toggle("PkmnClick")
        // hide select screen
        document.body.querySelector(".pkmnSelector").classList.toggle("hidden")
        choice = e.target.parentElement.getAttribute("name")
    }

    if (e.target.localName == "img" || e.target.localName == "p"|| e.target.className.includes("container")) {
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

        // let player = events.randomPkmn(allPkmn)
        let player = events.selectPkmn(allPkmn, choice) 
        console.log(player);
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
            if (i == 1) {
                life.innerText = `pv: ${player.lp} / ${player.lpMax}`
            }
            // else {
            //     life.innerText = `pv: ${cpu.lp} / ${cpu.lpMax}`
            // }
            
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

        //taille sprite pokemon joueur
        let playerSprite = document.querySelector(".fighter:last-of-type img")
        if (player.name === "Dracaufeu") {
           playerSprite.style.height =  "550px"
           playerSprite.style.top =  "-100px"
           playerSprite.style.left =  "-150px"
        } else if ((player.name === "Pikachu")) {
            playerSprite.style.height =  "250px"
            playerSprite.style.left =  "80px"
        } else if ((player.name === "Nidoking")) {
            playerSprite.style.left =  "-10px"
        } else if ((player.name === "Ectoplasma")) {
            playerSprite.style.left =  "180px"
        } else if ((player.name === "Dracolosse")) {
            playerSprite.style.height =  "360px"
            playerSprite.style.left =  "60px"
        }

        //taille sprite pokemon ennemi
        let cpuSprite = document.querySelector(".fighter:first-of-type img")
        if (cpu.name === "Dracaufeu") {
            cpuSprite.style.height =  "250px"
            cpuSprite.style.top =  "-40px"
            cpuSprite.style.left =  "180px"
        } else if ((player.name === "Pikachu")) {
            cpuSprite.style.height =  "100px"
            cpuSprite.style.top =  "120px"
            cpuSprite.style.left =  "260px"
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
                } else if (e.target == document.querySelector(".atkBox:nth-of-type(2)")) {
                    player.attaque(player.techniques[1], cpu)
                } else if (e.target == document.querySelector(".atkBox:nth-of-type(3)")) {
                    player.attaque(player.techniques[2], cpu)
                } else {
                    player.attaque(player.techniques[3], cpu)
                }
                if (cpu.lp == 0) {
                    combatText.innerText = `${cpu.name} est vaincu.`
                    e.target.style.pointerEvents = "none"
                }
            }
            //attaque ennemie
            if (cpu.lp > 0) {
                atkDiv.style.pointerEvents = "none"
                document.addEventListener("click", (e) => {
                    cpu.randomAttaque(player)
                    if (player.lp == 0) {
                        combatText.innerText = `${player.name} est vaincu.`
                        e.target.style.pointerEvents = "none"
                    } else {
                        document.addEventListener("click", (e) => {
                            combatText.innerText = 'Choisissez une attaque.'
                            atkDiv.style.pointerEvents = "all"
                        }, { once: true })
                    }
                }, { once: true })
                
            }
            
        })
    }
})




