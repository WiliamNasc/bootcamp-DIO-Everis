const pets = [
    {
        name: 'doguinho',
        type: 'dog',
        age: 10
    },
    {
        name: 'bilu',
        type: 'cat',
        age: 2
    },
    {
        name: 'dourado',
        type: 'peixe',
        age: 1
    }
]

const eMenorQueCinco = (numero) => {
    return numero < 5
}

const newPets = pets.filter(({ age }) => eMenorQueCinco(age))

console.log(pets)
console.log(newPets)