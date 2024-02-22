function add(num1=88,num2=66){
    const result=num1+num2;
    console.log(num1,num2,result)
}
const sum = add(4,6)

function fullName(first,last="Alif"){
    const name=first+ " " +last
    return name;
}
const name2=fullName("Mehebul")
console.log(name2)