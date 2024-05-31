/* VOLGORDE
constanten
let
functions
event listeners
EN VOEG COMMENTS TOE
*/

/*CONSTANTEN*/

const steelKnop = document.querySelector ('#stelen'); /* bron img: https://cdn0.iconfinder.com/data/icons/monkey-2/382/monkey-011-512.png */
const mysteryKnop = document.querySelector ('#mysterydrink'); /* https://cdn2.iconfinder.com/data/icons/drinks-and-beverage-containers/100/04-256.png */
const soundKnopje = document.querySelector("#sound"); // Selecteert het knopje
const hongerBar = document.querySelector("#honger");
const verdachtBar = document.querySelector("#verdacht")
const banaanKnop = document.querySelector ('#banaan'); /* bron img: https://www.iconfinder.com/search?q=monkey */
const tekstVeranderen = document.querySelector("#tekst");
const instructietekstVeranderen = document.querySelector("#instructietekst");
const veranderAap = document.querySelector ("#basicaap"); /* bron: https://cdn2.iconfinder.com/data/icons/animal-vivid-volume-2/256/Monkey-256.png */
const audioKnop = new Audio("sound/junglethememario.mp3"); /* bron sound: https://www.youtube.com/watch?v=OBBD0XDrKlI&ab_channel=aswer */ /* Hulp van Tamara en Demi */ /* bron: https://code-hl.com/javascript/tutorials/how-to-play-sound-with-javascript */
const schreeuwen = new Audio ("sound/monkeyscreaming.mp3"); /* https://www.youtube.com/watch?v=FrCsy9capqQ&ab_channel=SuperMarioSoundtracks */
const etenGeluid = new Audio ("sound/namnamnam.mp3"); /* bron sound: https://www.youtube.com/watch?v=j6NNIgq9RGw&ab_channel=SoundEffects */
const mysteryAap = [ /* Hulp van Mart en Alexi */
    veranderAap.src = "img/aapgroothoofd.png",
    veranderAap.src = "img/blauweaap.png",
    veranderAap.src = "img/rodeaap.png",
    veranderAap.src = "img/scaryaap.png"
]
const bananenAantalElement = document.querySelector('#aantalbananen'); /*bron: https://chatgpt.com/share/45e9d53f-6bc7-4758-bec2-72b2417751f6 belangrijkste prompt ChatGPT:hoe kan je een limiet instellen van het aantal bananen dat je hebt (banaanKnop)? */


/*LETS*/
let honger = 0; /* bron:https://chatgpt.com/share/c4b43368-4685-40eb-94c2-ea1309da9bff belangrijkste prompt ChatGPT: hoe kan ik een health bar maken in javascript dat over tijd steeds minder wordt? ik mag geen gebruik maken van een var */
let verdacht = 10;
let gameOver = false /* Hulp van Mariska */
let bananenAantal = 5;

/*FUNCTIONS*/
function audioSpelen() { /*functie om de audio af te spelen*/
    audioKnop.play();
}

/*prompt ChatGPT:ik heb nu de functie van de banaan toegevoegd. Nu heb ik dezelfde functie, maar dan voor als een aap een banaan gaat stelen: function banaanstelen() {
    veranderAap.src = "img/aapsteeltbanaangif.gif";
    tekstVeranderen.textContent = "HEHEHEEE"
    setTimeout(() => {
        veranderAap.src = "img/basicaap.png";
        tekstVeranderen.textContent = ""
    }, 2000);
}   

ik weet alleen niet waarom het niet werkt */
function eten() {
    if (bananenAantal > 0) { // Controleer of er nog bananen zijn
        veranderAap.src = "img/aapmetbanaan.png"; /* bron img: https://www.bing.com/images/search?view=detailV2&ccid=GKB8ImRS&id=F636580FB76B049139455288952F4B2F4CF46171&thid=OIP.GKB8ImRS2MWOCwQJ_-cAhgHaHa&mediaurl=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fanimal-124%2F64%2Fmonkey-wildlife-zoo-animal-512.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.18a07c226452d8c58e0b0409ffe70086%3Frik%3DcWH0TC9LL5WIUg%26pid%3DImgRaw%26r%3D0&exph=512&expw=512&q=aap+icoon&simid=608007111736362634&form=IRPRST&ck=FA33E57DC32E61653D5755589BA96F52&selectedindex=5&itb=1&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_9t9DxfQj*cp_90F0290D49B4560059C29187776A0847*mid_5251CF5BC47754151DD2FBB219845DA892186261*simid_608020073985086162*thid_OIP.9t9DxfQjs!_nj7Cbh5M!_FsQHaHa&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0 */
        tekstVeranderen.textContent = "Namnamnam";
        etenGeluid.play();
        setTimeout(() => {
            veranderAap.src = "img/basicaap.png";
            tekstVeranderen.textContent = "";
            etenGeluid.pause();
        }, 2000);

        if (honger > 0) {
            honger -= 60;
            if (honger < 0) { 
                honger = 0;
            }
            hongerBar.style.width = honger + '%';
        }

        bananenAantal--; // Verminder het aantal beschikbare bananen
        bananenAantalElement.textContent = bananenAantal; // Werk het aantal bananen op het scherm bij
    } else {
        tekstVeranderen.textContent = "Je hebt geen bananen meer!";
        setTimeout(() => {
            tekstVeranderen.textContent = "";
        }, 2000);
    }
};


/*prompt ChatGPT: ik wil alleen dat als ik op een knop klik, dat de basicaap voor 2 seconden naar aapmetbanaan verandert, en dat hij daarna terugvernadert naar basicaap.
let banaanstatus = true

 function eten(){
    if (banaanstatus == false){
    veranderAap.src = "img/aapmetbanaan.png";
    banaanstatus = true;
    } else {
        veranderAap.src = "img/basicaap.png";
        banaanstatus = false;
        setTimeout (() => {
            veranderAap.src = "img/aapmetbanaan.png";
            banaanstatus = true;
        }, 2000);
    }      
    }
    


banaanKnop.addEventListener ('click', eten);*/
function banaanStelen () { 
    veranderAap.src = "img/aapsteeltbanaangif.gif"; /* bron img: https://viralviralvideos.com/wp-content/uploads/2014/07/GIF-Monkey-stealing-banana.gif */
    tekstVeranderen.textContent = "HEHEHEEE";
    schreeuwen.play();
    setTimeout(() => {
        veranderAap.src = "img/basicaap.png";
        tekstVeranderen.textContent = "";
        schreeuwen.pause();
    }, 2000);

    if (verdacht > 0) {
        verdacht -= 40;
        bananenAantal += 2;
        bananenAantalElement.textContent = bananenAantal; // Werk het aantal bananen op het scherm bij
    if (verdacht < 0) { 
        verdacht = 0;
    }
    verdachtBar.style.width = verdacht + '%';
    }
}   

function verhoogHonger() {
    if (gameOver == false) {
        if (honger < 100) {
            honger += 1;
            hongerBar.style.width = honger + '%';
        } else {
            veranderAap.src = "img/dodeaap.png" /* bron img: https://cdn4.iconfinder.com/data/icons/monkey-emoticon-filled-outline/512/DEAD-emoticons-feelings-emoji-monkey_face-256.png */
            instructietekstVeranderen.textContent = "Helaas, je aapje is dood!" 
            gameOver = true
    }
    }
};

function verhoogVerdacht () {
    if (gameOver == false) {
        if (verdacht < 100) {
            verdacht += 1;
            verdachtBar.style.width = verdacht + '%';
        } if (verdacht < 5) {
            veranderAap.src = "img/verbaasdeaap.png"
            instructietekstVeranderen.textContent = "Helaas, je aapje is gearresteerd!"
            gameOver = true
        }
    }
};

function mysteryy() {
    const randomIndex = Math.floor (Math.random() * mysteryAap.length);
    const randomPlaatje = mysteryAap [randomIndex];
    veranderAap.src = randomPlaatje;
}

/*EVENT LISTENERS*/
banaanKnop.addEventListener ('click', eten);
steelKnop.addEventListener ('click', banaanStelen);
mysteryKnop.addEventListener ('click', mysteryy);
soundKnopje.addEventListener ('click', audioSpelen); /*als je klikt, wordt de functie audioSpelen gebruikt. Let op: het knopje wordt geselecteerd, niet de scheeuwKnop.*/

document.addEventListener("DOMContentLoaded", () => {
    veranderAap.src = "img/basicaap.png"; // default plaatje ingeladen
    setInterval(verhoogHonger, 100); // verhoogt honger elke 100ms
    setInterval(verhoogVerdacht, 350); // verhoogt verdacht elke 1000ms
});