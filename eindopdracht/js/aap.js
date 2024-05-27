/*
constanten
let
functions
event listeners
EN VOEG COMMENTS TOE
*/

/*CONSTANTEN*/
const steelKnop = document.querySelector ('#stelen');
const mysteryKnop = document.querySelector ('#mysterydrink');
const knopje = document.querySelector("#sound"); /* Selecteert het knopje*/ /*bron: Tamara en Demi*/


/*LETS*/
let banaanKnop = document.querySelector ('#banaan');
let tekstveranderen = document.querySelector("#tekst");
let veranderaap = document.querySelector ("#basicaap");
let audioKnop = new Audio("sound/junglethememario.mp3");
let schreeuwKnop = new Audio ("sound/monkeyscreaming.mp3");

/*FUNCTIONS*/
function audioSpelen() { /*functie om de audio af te spelen*/
    audioKnop.play();
}

/*prompt ChatGPT:ik heb nu de functie van de banaan toegevoegd. Nu heb ik dezelfde functie, maar dan voor als een aap een banaan gaat stelen: function banaanstelen() {
    veranderaap.src = "img/aapsteeltbanaangif.gif";
    tekstveranderen.textContent = "HEHEHEEE"
    setTimeout(() => {
        veranderaap.src = "img/basicaap.png";
        tekstveranderen.textContent = ""
    }, 2000);
}   

ik weet alleen niet waarom het niet werkt */
function eten() {
    veranderaap.src = "img/aapmetbanaan.png";
    tekstveranderen.textContent = "Namnamnam";
    setTimeout(() => {
        veranderaap.src = "img/basicaap.png";
        tekstveranderen.textContent = "";
    }, 2000);
}   

/*prompt ChatGPT: ik wil alleen dat als ik op een knop klik, dat de basicaap voor 2 seconden naar aapmetbanaan verandert, en dat hij daarna terugvernadert naar basicaap.
let banaanstatus = true

 function eten(){
    if (banaanstatus == false){
    veranderaap.src = "img/aapmetbanaan.png";
    banaanstatus = true;
    } else {
        veranderaap.src = "img/basicaap.png";
        banaanstatus = false;
        setTimeout (() => {
            veranderaap.src = "img/aapmetbanaan.png";
            banaanstatus = true;
        }, 2000);
    }      
    }
    


banaanKnop.addEventListener ('click', eten);*/
function banaanStelen() { 
    veranderaap.src = "img/aapsteeltbanaangif.gif";
    tekstveranderen.textContent = "HEHEHEEE";
    schreeuwKnop.play();
    setTimeout(() => {
        veranderaap.src = "img/basicaap.png";
        tekstveranderen.textContent = "";
        schreeuwKnop.pause();
    }, 2000);
}   

/*EVENT LISTENERS*/
banaanKnop.addEventListener ('click', eten);
steelKnop.addEventListener ('click', banaanStelen);
knopje.addEventListener ('click', audioSpelen); /*als je klikt, wordt de functie audioSpelen gebruikt. Let op: het knopje wordt geselecteerd, niet de scheeuwKnop.*/
