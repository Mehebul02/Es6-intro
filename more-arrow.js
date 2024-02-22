const difference = (x,y) => x > y;
console.log(9,6);

const getAge =(person) =>(person.age);
const student ={name:"Mehebul Alis",age:20};
const age =getAge(student);
console.log(age)

const getSubject =(subject) =>(subject.name);
const subject={
    name:"System Analysis & Design",
    name:"Network Adminisstor",
}
const subjectName =getSubject(subject);
console.log(subjectName)

const getThird =number => number[7];
const third =getThird([44,66,77,77,88,88,66,55,44,9])
console.log(third)

// No parameter
const getPI =() =>Math.PI 
console.log(getPI())

// large arrow function 
const doMath =(x,y,z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result =sum * multi;
    return result

}
const totalSum =doMath(3,4,5);
console.log(totalSum);
