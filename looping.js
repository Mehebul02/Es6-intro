const bat={
    name: "ss",
    price: "2400 Tk",
    weight: '200gm',
    madeIn: "China"
}
for(const key in bat){
    const values =bat[key]
    console.log(key,values);
}