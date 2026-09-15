const a = 10;
const b = "10";
const c = 10;
const d = true;

console.log(
    a === b,    //false
    a == b,     //true
    a === c,    //true
    a !== b,    //true
    a !== c,    //false
    b === "10", //true
    d === 1     //false
)
console.log(d == 1) // true