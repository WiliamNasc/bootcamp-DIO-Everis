const pets = [
    {
        tipo: 'Cachorro',
        nome: 'Auau',
        idade: 15,
        peso: 30
    },
    {
        tipo: 'Passáro',
        nome: 'Gavião Bueno',
        idade: 2,
        peso: 5
    },
    {
        tipo: 'Gato',
        nome: 'Folgado',
        idade: 10,
        peso: 20
    },
    {
        tipo: 'Peixe',
        nome: 'Nemo',
        idade: 1,
        peso: 0.5
    },
    {
        tipo: 'Cobra',
        nome: 'Snake',
        idade: 2,
        peso: 7
    }
]

const nomePets = pets.map((pet) => {
    return pet.nome
})

console.log(nomePets)