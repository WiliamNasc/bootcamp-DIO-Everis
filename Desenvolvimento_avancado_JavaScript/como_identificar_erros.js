/* 
    - variáveis com a plavra especial const, não possuem housting (elevação),
      ou seja, elas não podem ser usadas, antes de sua declação, por exemplo:
      console.log(name); -- dará erro
      const name = 'Wiliam';
    - Quando ocorre um erro no código, o JS enterrompe as demais implementações,
      por exemplo:
      console.log(name);
      const nome = 'Wiliam';
      console.log('Keep going'); -- não será executado
    - Erros no JS, são uma classe (de nome "Error"), logo é possível criar os seus próprios erros;
    - Uma forma de fazer com que o seu código seja executado, mesmo que tenha algum erro,
      em dada parte, é utilizando o try, catch, e opcionalmente o finally (caso,
      alguma funcionalidade precisse ser executada, com software com erros, ou não) --- está é a maneira clássica;
    - A palavra reservada "throw", dispara os erros criados no JS;
    - Criar classes de erros, pode ser uma boa ideia, pois facilita a outros desenvolvedores, clientes,
      etc, a compreender qual a causa do ocorrido, quanto mais detelhes disponibilizarmos sobre um erro,
      mais estaremos ajudando no seu contorno, ou solução.
*/

class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try {
    const nome = 'Wiliam';
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    }); // cria um erro
    throw myError; // dispara um erro
} catch (err) {
    console.log(err);
    console.log(err.data);
} finally {
    console.log('Keep going');
}
