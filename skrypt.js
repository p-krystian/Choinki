// Zmienne i stale
const suwakA = document.querySelector('#a');
const suwakB = document.querySelector('#b');
const suwakC = document.querySelector('#c');
const suwakD = document.querySelector('#d');
const suwakE = document.querySelector('#e');
const wynik = document.getElementById('wynik');
const info = document.querySelector('.info');
let aV, bV, cV, dV, eV;
let akcja = 'change';
if (innerHeight < innerWidth) akcja = 'mousemove';
let aktualneDrzewko;
// Funkcje
function sprawdzanie(){
    while (suwakA.valueAsNumber < suwakB.valueAsNumber) suwakA.valueAsNumber += 2;
    while (suwakA.valueAsNumber > suwakC.valueAsNumber) suwakC.valueAsNumber += 2;
    while (suwakC.valueAsNumber < suwakB.valueAsNumber) suwakC.valueAsNumber += 2;
    while (suwakE.valueAsNumber >= suwakC.valueAsNumber) suwakE.valueAsNumber -= 2;
    zastosuj();
}
function zastosuj(){
    aV = suwakA.valueAsNumber;
    bV = suwakB.valueAsNumber;
    cV = suwakC.valueAsNumber;
    dV = suwakD.valueAsNumber;
    eV = suwakE.valueAsNumber;
    aktualneDrzewko = `${drzewko(aV, bV, cV, dV, eV)}`;
    wynik.innerHTML = aktualneDrzewko;
}
function drzewko(a, b, c, d, e){
    let choinka = '';
    for (let i = 1; i <= a; i += 2) choinka += `${tworzenieLini(c, i)}\n`;
    for (let i = b; i <= c; i += 2) choinka += `${tworzenieLini(c, i)}\n`;
    for (let i = 0; i < d; i++) choinka += `${tworzenieLini(c, e)}\n`;
    return choinka;
}
function tworzenieLini(dlugoscLini, iloscHashow){
    let iloscKropek = (dlugoscLini - iloscHashow) / 2;
    let linia = '';
    for (let i = 0; i < iloscKropek; i++) linia += '.';
    for (let i = 0; i < iloscHashow; i++) linia += '#';
    for (let i = 0; i < iloscKropek; i++) linia += '.';
    return linia;
}
function skopiuj(){
    wynik.select();    
    document.execCommand('copy');
    info.style.animationName = 'wysun';
    setTimeout(() => {info.style.animationName = '';}, 3000);
}
// Wywolanie
window.onLoad = setTimeout(zastosuj, 100);
suwakA.addEventListener(akcja, sprawdzanie);
suwakB.addEventListener(akcja, sprawdzanie);
suwakC.addEventListener(akcja, sprawdzanie);
suwakD.addEventListener(akcja, sprawdzanie);
suwakE.addEventListener(akcja, sprawdzanie);
