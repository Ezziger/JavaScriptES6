//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

console.log(Object.entries(bus));

console.log(Object.entries(bus));


//3.2 Object.values

<<<<<<< HEAD
Object.values(data).forEach(element => {
    console.log(element.texte);
});
=======
Object.values(data).forEach(function(element)
{
    console.log(element.texte)
})

>>>>>>> d514d8ecb381c886d4de0116d87765dad46e8172
