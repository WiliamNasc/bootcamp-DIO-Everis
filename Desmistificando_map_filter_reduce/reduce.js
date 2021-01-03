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
        tipo: 'Cachorro',
        nome: 'Nemo',
        idade: 1,
        peso: 12
    },
    {
        tipo: 'Cobra',
        nome: 'Snake',
        idade: 2,
        peso: 7
    }
]

const totalPesoPets = pets.reduce((total, pet) => {
    return total + pet.peso
}, 0)

const somatoriaPesoIdadePets = pets.reduce((total, pet) => {
    return {
        totalPeso: total.totalPeso + pet.peso,
        totalIdade: total.totalIdade + pet.idade
    }
}, { totalPeso: 0, totalIdade: 0 })

const somaIdadeCachorro = pets.reduce((total, pet) => {
    if (pet.tipo !== 'Cachorro') return total
    return total + pet.idade
}, 0)

const somaPesoCachorro = pets.filter((pet) => {
    return pet.tipo === "Cachorro"
}).reduce((total, pet) => {
    return total + pet.peso
}, 0)

console.log(totalPesoPets)
console.log(somatoriaPesoIdadePets)
console.log(somaIdadeCachorro)
console.log(somaPesoCachorro)