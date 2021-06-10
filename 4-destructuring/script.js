//4.1 Découverte

<<<<<<< HEAD
const [a, b, c] = [1, 2, 3, 4]
console.log(a)
=======
const [a, b] = [1, 2, 3, 4]        //on associe a à la première valeur du tableau et b à la 2ème
console.log(a)                      
>>>>>>> d514d8ecb381c886d4de0116d87765dad46e8172
console.log(b)
console.log(c)

<<<<<<< HEAD
const { first, last, age } = { first: 'Paul', last: 'Henta', age: 35 }
=======
//on associe les attributs first et last d'un objet existant à un nouvel objet
const {first, last} = {first: 'Paul', last: 'Henta', age: 35} 
>>>>>>> d514d8ecb381c886d4de0116d87765dad46e8172
console.log(first)
console.log(last)
console.log(age)

const [,,c,] = [1, 2, 3, 4] 
console.log(c)

const {age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(age)

//4.2 Application

<<<<<<< HEAD
console.log(data)

Object.values(data).forEach(element => {
    var perturbations = element.texte;
    var dD = element.dateDebut;
    var dF = element.dateFin;
    console.log("Du " + dD + " au " + dF + " en raison de : " + perturbations, dD, dF);
=======
//afficher texte, date de début et date de fin


Object.values(data).forEach(function (element)
{   
    var {dateDebut, dateFin, texte} = element;
    console.log(dateDebut, dateFin, texte);
>>>>>>> d514d8ecb381c886d4de0116d87765dad46e8172
});