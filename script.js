// Variables and constants
const rangeA = document.querySelector('#a');
const rangeB = document.querySelector('#b');
const rangeC = document.querySelector('#c');
const rangeD = document.querySelector('#d');
const rangeE = document.querySelector('#e');
const result = document.querySelector('#result');
const info = document.querySelector('.info');
const action = (innerHeight < innerWidth) ? 'input' : 'change';
let aV, bV, cV, dV, eV;
let currentTree;

// Functions
function apply(){
  aV = +rangeA.value;
  bV = +rangeB.value;
  cV = +rangeC.value;
  dV = +rangeD.value;
  eV = +rangeE.value;
  currentTree = `${tree(aV, bV, cV, dV, eV)}`;
  result.innerHTML = currentTree;
}

function checking(changedElement){
  let a = +rangeA.value;
  let b = +rangeB.value;
  let c = +rangeC.value;
  let e = +rangeE.value;

  switch(changedElement){
    case 'a':
      if (a < b) rangeB.valueAsNumber = a;
      if (a > c) rangeC.valueAsNumber = a;
      break;

    case 'b':
      if (b > a) rangeA.valueAsNumber = b;
      if (b > c) rangeC.valueAsNumber = b;
      break;

    case 'c':
      if (c < a) rangeA.valueAsNumber = c;
      if (c < b) rangeB.valueAsNumber = c;
      if (c <= e) rangeE.valueAsNumber = Math.max(1, c - 2);
      break;

    case 'e':
      if (e >= c) rangeC.valueAsNumber = e + 2;
      break;
  }

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
  setTimeout(() => (info.style.animationName = ''), 3000);
}

// Run
window.addEventListener('load', () => setTimeout(apply, 100));
rangeA.addEventListener(action, () => checking('a'));
rangeB.addEventListener(action, () => checking('b'));
rangeC.addEventListener(action, () => checking('c'));
rangeD.addEventListener(action, () => checking('d'));
rangeE.addEventListener(action, () => checking('e'));
