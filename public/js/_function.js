
//////////////////// selection ////////////////////
export function selectHoverIn(e) {
    if (e.target.className.includes("container")) {
        e.target.classList.toggle("PkmnHover")
    }else if (e.target.localName == "img" || e.target.localName == "p") {
        e.target.parentElement.classList.toggle("PkmnHover")
    }
}

export function selectHoverOut(e) {
    if (e.target.className.includes("container")) {
        e.target.classList.toggle("PkmnHover")
    } else if (e.target.localName == "img" || e.target.localName == "p") {
        e.target.parentElement.classList.toggle("PkmnHover")
    }
}

export function selectClick(e) {
    if (e.target.className.includes("container")) {
        e.target.classList.toggle("PkmnClick")
        // // hide select screen
        //document.body.querySelector(".pkmnSelector").classList.add("hidden")
        return (e.target.getAttribute("name")
        );
    } else if (e.target.localName == "img" || e.target.localName == "p") {
        e.target.parentElement.classList.toggle("PkmnClick")
        // // hide select screen
        //document.body.querySelector(".pkmnSelector").classList.add("hidden")

    }
}



//////////////////// combat ////////////////////
export function selectPkmn(allPkmn, choice) {
    let p = ""
    allPkmn.forEach(pkmn => {
        if (pkmn.name == choice) {
           p = pkmn
        }
    });
    return p
}

export function randomPkmn(allPkmn) {
    let randomIndex = Math.floor(Math.random()*allPkmn.length)
    return allPkmn[randomIndex]
}



