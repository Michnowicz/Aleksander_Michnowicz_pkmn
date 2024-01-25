
export class Pokemon {
    constructor(name, lp, atk, def, atkSpe, defSpe, speed, type, srcFront, srcBack) {
        this.name = name;
        this.lp = lp;
        this.atk = atk
        this.def = def
        this.atkSpe = atkSpe
        this.defSpe = defSpe
        this.speed = speed
        this.type = type
        this.srcFront = srcFront
        this.srcBack = srcBack
    }
}

let florizarre = new Pokemon("Florizarre", "301", "200", "202", "236", "236", "196", "plante", "./public/sprites/venusaurFront.gif", "./public/sprites/venusaurBack.gif")
let dracaufeu  = new Pokemon("Dracaufeu", "301", "200", "202", "236", "236", "196", "feu", "./public/sprites/charizardFront.gif", "./public/sprites/charizardBack.gif")
let tortank = new Pokemon("Tortank", "299", "202", "236", "206", "246", "192","eau", "./public/sprites/blastoiseFront.gif", "./public/sprites/blastoiseBack.gif")
let pikachu = new Pokemon("Pikachu", "211", "146", "96", "136", "116", "216","electrique", "./public/sprites/pikachuFront.gif", "./public/sprites/pikachuBack.gif")
let nidoking = new Pokemon("Nidoking", "303", "220", "190", "206", "186", "206","poison", "./public/sprites/nidokingFront.gif", "./public/sprites/nidokingBack.gif")
let leviator = new Pokemon("Leviator","331", "286", "194", "156", "236", "198","eau", "./public/sprites/gyaradosFront.gif", "./public/sprites/gyaradosBack.gif")
let ectoplasma = new Pokemon("Ectoplasma", "261", "166", "156", "296", "186", "256","tenebre", "./public/sprites/gengarFront.gif", "./public/sprites/gengarBack.gif")
let dracolosse = new Pokemon("Dracolosse", "323", "304", "226", "236", "236", "196","dragon", "./public/sprites/dragoniteFront.gif", "./public/sprites/dragoniteBack.gif")


export let allPkmn = [florizarre, tortank, ectoplasma, dracolosse]

export let liste = [florizarre, dracaufeu, tortank, pikachu, nidoking, leviator, ectoplasma, dracolosse]