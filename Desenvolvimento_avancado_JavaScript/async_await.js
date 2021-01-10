/*Obs.: O fetch está restornando indefinido,
  mesmo baixando o seu pacote, então está parte da aula,
  não fora implementada
*/

/* Async / Await:
   - É uma forma mais simples, de se criar promises,
     e lidar, com promises, dentro de promises;
   - Só de colocar a palavra "async", já transforma uma função em uma promise;
   - O await faz com que uma promise seja aguardada, até a sua execução;
   - O await, nos remete um tratamento sequencial de nossas promises, porém,
     você pode mesclar o await com Promise.all e tornar a execução das promises paralelas.
*/

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(12345); 
    }, 1000);
})

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;
}

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });