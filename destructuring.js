const studentName={
    names:"Naem Sarkar",
    roll:532476,
    age:21,
    phone:"01737483929",
    home:"Sirajgang",
}
const {names:tor,roll,home} =studentName
// const phone =studentName.phone
// console.log(studentName.age);
// console.log(phone);

console.log(roll)
console.log(home)
console.log(tor)

// Array destructuring 
const numbers =[33,5];
const [first, second] = numbers;
console.log(first);
console.log(second);
