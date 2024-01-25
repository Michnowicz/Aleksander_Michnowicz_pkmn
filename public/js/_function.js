


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
    } else if (e.target.localName == "img" || e.target.localName == "p") {
        e.target.parentElement.classList.toggle("PkmnClick")
        // // hide select screen
        //document.body.querySelector(".pkmnSelector").classList.add("hidden")
    }
}



//////////////////// combat ////////////////////
export function randomPkmn(allPkmn) {
    let randomIndex = Math.floor(Math.random()*allPkmn.length)
    return allPkmn[randomIndex]
}

////////// atk //////////
export function atk(e) {
    if (e.target.className == "atkBox") {
        e.target.style.backgroundColor = "rgb(3, 3, 3)"
        setInterval(() => {
            e.target.style.backgroundColor = "rgb(29, 29, 29)"
        }, 100);
    }
   
}

////////// plante //////////
export function lanceSoleil(pkmn) {
    if (pkmn.lp >= 100) {
        pkmn.lp -= 100
    } else {
        pkmn.lp = 0
    }
}
export function trancheHerbe(pkmn) {
    if (pkmn.lp >= 55) {
        pkmn.lp -= 55
    } else {
        pkmn.lp = 0
    }
}
export function fouetLiane(pkmn) {
    if (pkmn.lp >= 70) {
        pkmn.lp -= 70
    } else {
        pkmn.lp = 0
    }
}
export function ecoSphere(pkmn) {
    if (pkmn.lp >= 80) {
        pkmn.lp -= 80
    } else {
        pkmn.lp = 0
    }
}
////////// feu //////////
export function crocFeu(pkmn) {
    if (pkmn.lp >= 65) {
        pkmn.lp -= 65
    } else {
        pkmn.lp = 0
    }
}
export function lanceFlamme(pkmn) {
    if (pkmn.lp >= 95) {
        pkmn.lp -= 95
    } else {
        pkmn.lp = 0
    }
}
export function dracoQueue(pkmn) {
    if (pkmn.lp >= 70) {
        pkmn.lp -= 70
    } else {
        pkmn.lp = 0
    }
}
export function boutefeu(pkmn) {
    if (pkmn.lp >= 100) {
        pkmn.lp -= 100
    } else {
        pkmn.lp = 0
    }
}
////////// eau //////////
export function surf(pkmn) {
    if (pkmn.lp >= 60) {
        pkmn.lp -= 60
    } else {
        pkmn.lp = 0
    }
}
export function hydrocannon(pkmn) {
    if (pkmn.lp >= 100) {
        pkmn.lp -= 100
    } else {
        pkmn.lp = 0
    }
}
export function hydroQueue(pkmn) {
    if (pkmn.lp >= 70) {
        pkmn.lp -= 70
    } else {
        pkmn.lp = 0
    }
}
export function aquajet(pkmn) {
    if (pkmn.lp >= 50) {
        pkmn.lp -= 50
    } else {
        pkmn.lp = 0
    }
}
////////// electrique //////////
export function poingEclair(pkmn) {
    if (pkmn.lp >= 70) {
        pkmn.lp -= 70
    } else {
        pkmn.lp = 0
    }
}
export function tonerre(pkmn) {
    if (pkmn.lp >= 100) {
        pkmn.lp -= 100
    } else {
        pkmn.lp = 0
    }
}
export function bouleElek(pkmn) {
    if (pkmn.lp >= 80) {
        pkmn.lp -= 80
    } else {
        pkmn.lp = 0
    }
}
export function poingEclair(pkmn) {
    if (pkmn.lp >= 50) {
        pkmn.lp -= 50
    } else {
        pkmn.lp = 0
    }
}
////////// poison //////////
export function dardVenin(pkmn) {
    if (pkmn.lp >= 60) {
        pkmn.lp -= 60
    } else {
        pkmn.lp = 0
    }
}
export function directToxic(pkmn) {
    if (pkmn.lp >= 100) {
        pkmn.lp -= 100
    } else {
        pkmn.lp = 0
    }
}
export function Toxic(pkmn) {
    if (pkmn.lp >= 80) {
        pkmn.lp -= 80
    } else {
        pkmn.lp = 0
    }
}
export function BombBeurk(pkmn) {
    if (pkmn.lp >= 50) {
        pkmn.lp -= 50
    } else {
        pkmn.lp = 0
    }
}
////////// spectre //////////
export function Viborpscure(pkmn) {
    if (pkmn.lp >= 60) {
        pkmn.lp -= 60
    } else {
        pkmn.lp = 0
    }
}
export function ballOmbre(pkmn) {
    if (pkmn.lp >= 100) {
        pkmn.lp -= 100
    } else {
        pkmn.lp = 0
    }
}
export function poingOmbre(pkmn) {
    if (pkmn.lp >= 80) {
        pkmn.lp -= 80
    } else {
        pkmn.lp = 0
    }
}
export function lechouille(pkmn) {
    if (pkmn.lp >= 50) {
        pkmn.lp -= 50
    } else {
        pkmn.lp = 0
    }
}