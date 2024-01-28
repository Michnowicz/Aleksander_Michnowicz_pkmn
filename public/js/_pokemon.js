
export class Pokemon {
    constructor(name, lp, lpMax, atk, def, atkSpe, defSpe, speed, type, srcFront, srcBack, art, techniques) {
        this.name = name
        this.lp = lp
        this.lpMax = lpMax
        this.atk = atk
        this.def = def
        this.atkSpe = atkSpe
        this.defSpe = defSpe
        this.speed = speed
        this.type = type
        this.srcFront = srcFront
        this.srcBack = srcBack
        this.art = art
        this.techniques = techniques
    }
    attaque(technique, ennemy) {
        if (ennemy.lp >= technique.power) {
            ennemy.lp -= technique.power
        } else {
            ennemy.lp = 0
        }

        let combatText = document.querySelector(".combatText")
        combatText.innerText = `${this.name} lance ${technique.name}.`

        let progress = document.querySelector(".progress:first-of-type")
        let lpLeft = ennemy.lp / (ennemy.lpMax/100)
        progress.style.width = `${lpLeft}%`

        let life = document.querySelector(".uiDiv:first-of-type .life")
        life.innerHTML = `pv: ${ennemy.lp} / ${ennemy.lpMax}`
    }
    randomAttaque(ennemy) {
        let technique = this.techniques[Math.floor(Math.random()*this.techniques.length)]
        if (ennemy.lp >= technique.power) {
            ennemy.lp -= technique.power
        } else {
            ennemy.lp = 0
        }

        let combatText = document.querySelector(".combatText")
        combatText.innerText = `${this.name} lance ${technique.name}.`

        let progress = document.querySelectorAll(".progress")[1]
        let lpLeft = ennemy.lp / (ennemy.lpMax/100)
        progress.style.width = `${lpLeft}%`

        let life = document.querySelectorAll(".uiDiv .life")[1] 
        life.innerHTML = `pv: ${ennemy.lp} / ${ennemy.lpMax}`
    }

}

export class Technique {
    constructor(name, power) {
        this.name = name
        this.power = power
    } 
}


//////////////////// techniques ////////////////////
//plante
let lanceSoleil = new Technique("lance-soleil", 100)
let fouetLiane = new Technique("fouet liane", 70)
let ecoSphere = new Technique("eco-sphere", 80)
let trancheHerbe = new Technique("tranche herbe", 55)
//feu
let crocFeu = new Technique("croc feu", 65)
let lanceFlamme = new Technique("lance-flamme", 95)
let dracoQueue = new Technique("draco queue",70)
let boutefeu = new Technique("boutefeu", 100)
//eau
let surf = new Technique("surf", 60)
let hydrocannon = new Technique("hydrocannon", 100)
let hydroQueue = new Technique("hydro queue", 70)
let aquajet = new Technique("aquajet", 50)
//electrique
let poingEclair = new Technique("poing eclair", 70)
let tonerre = new Technique("tonerre", 100)
let bouleElek = new Technique("boule elek", 80)
let eclair = new Technique("eclair", 50)
//poison
let dardVenin = new Technique("dard venin", 60)
let directToxic = new Technique("direct toxic", 95)
let toxic = new Technique("toxic", 75)
let bombBeurk = new Technique("bomb beurk", 50)
//spectre
let vibropscure = new Technique("vibropscure", 60)
let ballOmbre = new Technique("ball ombre", 95)
let poingOmbre = new Technique("poing ombre", 75)
let lechouille = new Technique("lechouille", 50)

//////////////////// pokemon ////////////////////
let florizarre = new Pokemon("Florizarre", 301, 301, 200, 202, 236, 236, 196, "plante", "./public/sprites/venusaurFront.gif", "./public/sprites/venusaurBack.gif","./public/sprites/cards/florizarre.png", [lanceSoleil, fouetLiane, ecoSphere, trancheHerbe])
let dracaufeu  = new Pokemon("Dracaufeu", 297, 297, 204, 192, 254, 206, 236, "feu", "./public/sprites/charizardFront.gif", "./public/sprites/charizardBack.gif","./public/sprites/cards/dracaufeu.png", [crocFeu, lanceFlamme, dracoQueue, boutefeu])
let tortank = new Pokemon("Tortank", 299, 299, 202, 236, 206, 246, 192,"eau", "./public/sprites/blastoiseFront.gif", "./public/sprites/blastoiseBack.gif","./public/sprites/cards/tortank.png", [surf, hydrocannon, hydroQueue, aquajet])
let pikachu = new Pokemon("Pikachu", 211, 211, 146, 96, 136, 116, 216,"electrique", "./public/sprites/pikachuFront.gif", "./public/sprites/pikachuBack.gif","./public/sprites/cards/pikachu.png", [poingEclair, tonerre, bouleElek, eclair])
let nidoking = new Pokemon("Nidoking", 303, 303, 220, 190, 206, 186, 206,"poison", "./public/sprites/nidokingFront.gif", "./public/sprites/nidokingBack.gif","./public/sprites/cards/nidoking.png", [dardVenin, directToxic, toxic, bombBeurk])
let leviator = new Pokemon("Leviator",331, 331, 286, 194, 156, 236, 198,"eau", "./public/sprites/gyaradosFront.gif", "./public/sprites/gyaradosBack.gif","./public/sprites/cards/leviator.png", [surf, hydrocannon, hydroQueue, aquajet])
let ectoplasma = new Pokemon("Ectoplasma", 261, 261, 166, 156, 296, 186, "256","spectre", "./public/sprites/gengarFront.gif", "./public/sprites/gengarBack.gif","./public/sprites/cards/ectoplasma.png", [vibropscure, ballOmbre, poingOmbre, lechouille])
let dracolosse = new Pokemon("Dracolosse", 323, 323, 304, 226, 236, 236, 196,"feu", "./public/sprites/dragoniteFront.gif", "./public/sprites/dragoniteBack.gif","./public/sprites/cards/dracolosse.png", [crocFeu, lanceFlamme, dracoQueue, boutefeu])

// listes
export let allPkmn = [florizarre, dracaufeu, tortank, pikachu, nidoking, leviator, ectoplasma, dracolosse]