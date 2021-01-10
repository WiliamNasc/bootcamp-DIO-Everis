/* Promises:
    - Podem três estados:
        - Pendente/executando (pending);
        - Terminou de executar (fulfilled);
        - Rejeitada (reject).
    - Permitem que você encadeie uma na outra;
    - Permite que você trate diversas promises, em cath só, se todas estiverem encadeadas;
    - Fácil manutenção;
    - Abordagem simples, para lidar com programação assincrona;
    - Permite a execução de promises em paralelo, ou seja, sem que elas sejam executadas em sequência;
    - Permite que as promises sejam executadas, sem ordem, ou seja, aquele que estiver pronta, será executada primeiro;
    - Além da forma que foram declaras neste código, as promises podem ser criadas com um método, por exemplo:
        - const doSomethingPromise = () => new Promise();
        Obs.: No momento de chama-las, será da seguinte forma: doSomethingPromise().
*/

const doSomethingPromise = new Promise((resolve, reject) => {
    /*throw new Error('Something went error');*/ // gera um erro
    setTimeout(function () {
        // did something
        resolve('First data with Promisse');
    }, 1000);
});

const doOtherThingPromisse = new Promise((resolve, reject) => {
    // throw new Error('Other thing error wrong');
    setTimeout(function () {
        // did something
        resolve('Second data with Promisse');
    }, 1000);
});

/*console.log(doSomethingPromise);*/ // mostra o estado pending
/*doSomethingPromise.then(data => console.log(data));*/ // executa a promisse, e mostra o seu conteúdo
/*doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));*/ // executa a promisse, trata um erro, caso aconteça, e retorna um conteúdo (seja do erro, ou do conteúdo esperado)
/*doSomethingPromise // encadeia as chamadas das promisses, no caso, a primeira promisse é executada, e depois retorna a segunda para execução
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromisse;
    })
    .then(data2 => console.log(data2.split('')))
    /*.catch(error => console.log('Ops ' , error));*/ // trata os erros de todas as promisses

/*Promise.all([doSomethingPromise, doOtherThingPromisse]).then((data) => { // executa todas as promises
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(error => {
    console.log(error);
});*/

Promise.race([doSomethingPromise, doOtherThingPromisse]).then(data => { // as promises que estiverem prontas para serem executadas, executaram primeiro
    console.log(data);
});

/*  callbacks - forma antiga */
function doSomething(callback) {
    setTimeout(function () {
        //did something
        callback('First data with callback');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data with callback');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (error) {
                        // handle error
                    }
                })
            } catch (error) {
                // handle error
            }
        });
    } catch (error) {
        // handle error
    }
}

doAll();