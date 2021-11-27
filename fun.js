const COK = document.getElementById("cok")
const NUM = document.getElementById("num")
const PL = document.getElementById("pl")
const CPSD = document.getElementById("cp")


const GLOVEPRICE = document.getElementById("bgl")
const SLAVEPRICE = document.getElementById("bsl")
const SUMMONERPRICE = document.getElementById("bsu")
const ROBOTPRICE = document.getElementById("bro")
const FACTORYPRICE = document.getElementById("bfa")
const VOLCANOPRICE = document.getElementById("bvo")
const GODPRICE = document.getElementById("bgo")

let glovePower = 1;
  
let copese;

function thousandsSeparators(num) {
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}
function updateDisplay() {
    NUM.innerHTML = `Cookies: ${thousandsSeparators(Math.round(cookies))}`
    CPSD.innerHTML = `CPS: ${thousandsSeparators(copese)}`
    PL.innerHTML = `<ul id="pl" class="pl my-2">
    <h2>Stats</h2>
    <li>Cookie glove power: ${thousandsSeparators(glovePower.toFixed(1))}</li>
    <li>Cookie slaves: ${thousandsSeparators(incomeSources.slaves)}</li>
    <li>Cookie summoners: ${thousandsSeparators(incomeSources.summoners)}</li>
    <li>Cookie robots: ${thousandsSeparators(incomeSources.robot)}</li>
    <li>Cookie factories: ${thousandsSeparators(incomeSources.factories)}</li>
    <li>Cookie volcanoes: ${thousandsSeparators(incomeSources.volcanoes)}</li>
    <li>Cookie gods: ${thousandsSeparators(incomeSources.gods)}</li>
    <br>
    <li>Cookies hand baked: ${thousandsSeparators(Math.round(cookiesHandBaked))}</li>
    </ul>`

    GLOVEPRICE.innerHTML = `Cookie glove : ${thousandsSeparators(Math.round(prices.gloves))} C`
    SLAVEPRICE.innerHTML = ` Cookie slave: ${thousandsSeparators(Math.round(prices.slaves))} C`
    SUMMONERPRICE.innerHTML = ` Cookie summoner: ${thousandsSeparators(Math.round(prices.summoners))} C`
    ROBOTPRICE.innerHTML = ` Cookie robot: ${thousandsSeparators(Math.round(prices.robot))} C`
    FACTORYPRICE.innerHTML = ` Cookie factory: ${thousandsSeparators(Math.round(prices.factories))} C`
    VOLCANOPRICE.innerHTML = ` Cookie volcano: ${thousandsSeparators(Math.round(prices.volcanoes))} C`
    GODPRICE.innerHTML = ` Cookie god: ${thousandsSeparators(Math.round(prices.gods))} C`
}



let cookies = 0;
let cookiesHandBaked = 0;

let incomeSources = {
    slaves: 0,
    summoners: 0,
    robot: 0,
    factories: 0,
    volcanoes: 0,
    gods:0
};

let prices = {
    gloves: 5,
    slaves: 50,
    summoners: 600,
    robot: 7500,
    factories: 85000,
    volcanoes: 1000000,
    gods: 350000000
}

let cps = {
    slaves: 1,
    summoners: 10,
    robot: 100,
    factories: 1000,
    volcanoes: 10000,
    gods: 200000
};

setInterval(() =>{
    cookies += (incomeSources.slaves * cps.slaves)/100; 
    cookies += (incomeSources.summoners * cps.summoners)/100; 
    cookies += (incomeSources.robot * cps.robot)/100; 
    cookies += (incomeSources.factories * cps.factories)/100; 
    cookies += (incomeSources.volcanoes * cps.volcanoes)/100; 
    cookies += (incomeSources.gods * cps.gods)/100; 

    copese= (incomeSources.slaves * cps.slaves) +
            (incomeSources.summoners * cps.summoners) +
            (incomeSources.robot * cps.robot) + 
            (incomeSources.factories * cps.factories) +
            (incomeSources.volcanoes * cps.volcanoes) +
            (incomeSources.gods * cps.gods) 
    updateDisplay();
},1000/100)

COK.addEventListener("click", (e) => {
    cookies += glovePower
    cookiesHandBaked += glovePower
    updateDisplay();
});

function buyGloves() {
    if (cookies >= prices.gloves ) {
        cookies -=prices.gloves
        prices.gloves *=11
        glovePower *=1.9
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buySlaves() {
    if (cookies >= prices.slaves ) {
        cookies -=prices.slaves
        prices.slaves *= 1.05
        incomeSources.slaves++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buySummoners() {
    if (cookies >= prices.summoners ) {
        cookies -=prices.summoners
        prices.summoners *= 1.05
        incomeSources.summoners++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyRobots() {
    if (cookies >= prices.robot ) {
        cookies -=prices.robot
        prices.robot *= 1.05
        incomeSources.robot++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyFactories() {
    if (cookies >= prices.factories ) {
        cookies -=prices.factories
        prices.factories *= 1.05
        incomeSources.factories++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyVolcanoes() {
    if (cookies >= prices.volcanoes ) {
        cookies -=prices.volcanoes
        prices.volcanoes *= 1.05
        incomeSources.volcanoes++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function buyGods() {
    if (cookies >= prices.gods ) {
        cookies -=prices.gods
        prices.gods *= 1.05
        incomeSources.gods++
    } else {
        console.log("You dont have enough cookies");
    }
    updateDisplay();
}
function skitneCookies(x) {
    cookies +=  x;
    console.log("Skitne cookies smaker ikke godt >:)");
    updateDisplay();
}