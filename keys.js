const bat={
    name: "ss",
    price: "2400 Tk",
    weight: '200gm',
    madeIn: "China"
}
// console.log(bat);
// const keys =Object.keys(bat);
// console.log(keys);
// const values = Object.values(bat);
// const entrise = Object.entries(bat);
// console.log(entrise);
// delete bat.weight;
// console.log(bat)

Object.freeze(bat)
delete bat.name
Object.seal(bat)
console.log(bat)

