// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(7);
// console.log(result);

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num*2;
const result = doubleIt(50);
console.log(result);

const add = (x, y) => (x+y) * 4;
const result2 = add(70, 90);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doubleIt2 = num2 => num2*2;
const result4 = doubleIt2(15.5);
console.log(result4);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result5 = doMath(7, 5);
console.log(result5);

const reja = function(num){
    return num * 7;
}
const result6 = reja(50);
console.log(result6);

const shamim = (num) => num * 2;
const hel = shamim(9);
console.log(hel);