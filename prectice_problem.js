// arrow function 

const multiply=(x,y,z) => {
   const multi= x*y*z;
   return multi;
};
const result =multiply(3,5,4);
console.log(result);

// template function
 const threeLine =`I am web developer.
 I love to code.
 I love eat biryani`
 console.log(threeLine)

//  arrow function
const add = (x,y=10) => {
    const sum =x+y;
    return sum

}
const total =add(0);
// console.log(total)

const square =(x) =>{
    const array =Math.sqrt(x);
    const sum =array+x/4
    return sum

}
const numbers=[2,5,4,4];
const result2=numbers.map(square);
console.log(result2)

const spreed=(a,b) =>{
    
}


