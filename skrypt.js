// Variables and constants
const rangeA = document.querySelector('#a');
const rangeB = document.querySelector('#b');
const rangeC = document.querySelector('#c');
const rangeD = document.querySelector('#d');
const rangeE = document.querySelector('#e');
const result = document.querySelector('#result');
const info = document.querySelector('.info');
let aV, bV, cV, dV, eV;
let action = 'change';
if (innerHeight < innerWidth) action = 'mousemove';
let currentTree;
// Functions
function apply(){
    aV = rangeA.valueAsNumber;
    bV = rangeB.valueAsNumber;
    cV = rangeC.valueAsNumber;
    dV = rangeD.valueAsNumber;
    eV = rangeE.valueAsNumber;
    currentTree = `${tree(aV, bV, cV, dV, eV)}`;
    result.innerHTML = currentTree;
}
function checking(){
    while (+rangeA.value < +rangeB.value) rangeA.valueAsNumber += 2;
    while (+rangeA.value > +rangeC.value) rangeC.valueAsNumber += 2;
    while (+rangeC.value < +rangeB.value) rangeC.valueAsNumber += 2;
    while (+rangeE.value >= +rangeC.value) rangeE.valueAsNumber -= 2;
    apply();
}
function tree(a, b, c, d, e){
    let chTree = '';
    for (let i = 1; i <= a; i += 2) chTree += `${createLine(c, i)}\n`;
    for (let i = b; i <= c; i += 2) chTree += `${createLine(c, i)}\n`;
    for (let i = 0; i < d; i++) chTree += `${createLine(c, e)}\n`;
    return chTree;
}
function createLine(lineLenght, hashCount){
    let dotCount = (lineLenght - hashCount) / 2;
    let line = '';
    for (let i = 0; i < dotCount; i++) line += '.';
    for (let i = 0; i < hashCount; i++) line += '#';
    for (let i = 0; i < dotCount; i++) line += '.';
    return line;
}
function copy(){
    result.select();
    document.execCommand('copy');
    info.style.animationName = 'eject';
    setTimeout(() => {info.style.animationName = '';}, 3000);
}
// Run
window.onload = setTimeout(apply, 100);
rangeA.addEventListener(action, checking);
rangeB.addEventListener(action, checking);
rangeC.addEventListener(action, checking);
rangeD.addEventListener(action, checking);
rangeE.addEventListener(action, checking);
