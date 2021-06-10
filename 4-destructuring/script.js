//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4]
console.log(a)
console.log(b)
console.log(c)

const { first, last, age } = { first: 'Paul', last: 'Henta', age: 35 }
console.log(first)
console.log(last)
console.log(age)

//4.2 Application

console.log(data)

Object.values(data).forEach(element => {
    var perturbations = element.texte;
    var dD = element.dateDebut;
    var dF = element.dateFin;
    console.log("Du " + dD + " au " + dF + " en raison de : " + perturbations, dD, dF);
});