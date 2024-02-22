const maxNumber =Math.max(66,66,77,88,99,44,130)

const numbers =[44,66,77,88,87,44,33,22,11,22,33,4,3];
const maxArray =Math.max(...numbers);
// console.log(...numbers)
console.log(maxArray);


// use spreed operator copy

const friends =[33,55,66,767,77];
const bondhu =friends;
//  bondhu.push(55);
console.log(bondhu)
const dosto =[...friends];
console.log(dosto)
friends.push(55)
console.log(friends);

const sonka =[...friends,5566];
console.log(sonka)


// copy operate 
const number =[4,5,6,7];
const copy =[1,2,4,...number,3,6,7];
console.log(copy)