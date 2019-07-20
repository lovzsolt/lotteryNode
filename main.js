let szamok = [];
let tempSzamok = szamok;
const MAX_NUMBERS = 91;
const DRAW_COUNT = 5;

function lottoSorsolas(maxNumbers= MAX_NUMBERS, drawCount = DRAW_COUNT){
 

const starTime = new Date().getTime();

let stat = new Map();

let i = 1;
while (i < MAX_NUMBERS) {
    szamok.push(i++);
}

for (let x = 0; x < 100000; x++) {
    tempSzamok = szamok;
    let draws = [];
    let i = 1;

    for (let j = 0; j < DRAW_COUNT; j++) {
        draws.push(sorsolas());
        // console.log('számok: '+szamok.join(','));

    }
     /*console.log('Lottószámok: ' + draws.join(','));
    console.log('-------------------------------------');
    itt kellene összegyűjteni a */
    draws.map(e => {
        let ertek = stat.get(e);
        if (ertek == undefined) {
            stat.set(e, 1);
        } else {
            stat.set(e, ++ertek);
        }
    });
}


let counter = 0;
let arr =[];
for (let [key, value] of (new Map([...stat.entries()].sort((a,b) => b[1] - a[1])))) {     // get data sorted
    if(counter === drawCount)
        break;
    console.log(`szám: ${key}, érték: ${value}`);
    arr.push(key);
    counter++;
}

console.log(`L${drawCount},`+arr)
const endTime = new Date().getTime();
console.log(`elapsed time: ${(endTime-starTime)/1000} s`);
}

function sorsolas() {
    const index = Math.floor(Math.random() * Math.floor(tempSzamok.length));
    const sorsoltSzam = tempSzamok[index];
    //console.log('sorsoltszám: '+sorsoltSzam);
    tempSzamok = tempSzamok.filter(x => x != sorsoltSzam);
    return sorsoltSzam;
}


lottoSorsolas(maxNumbers= 90, drawCount = 5);