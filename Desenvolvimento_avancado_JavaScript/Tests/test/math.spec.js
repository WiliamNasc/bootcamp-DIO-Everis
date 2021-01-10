/*  Mocha
    - Qualquer erro que despare dentro do describe ou it, fará com que o teste falhe;
    - O tempo limite de espera, para a execução de um teste no mocha é 2000ms;
    - É possível setar o tempo limite de espera dos testes, no mocha;
    - O mocha recomenda não utilizar arrow functions, pois pode ocorrer problemas de escopo,
      isso pode afetar diretamente no usu de alguns recursos de teste do mocha, então na declaração
      do describe e it, sempre declarar functions;
    - O mocha permite criarmos testes (it´s), que ainda não existem, por exemplo: it('Multiply two numbers').
      Ao executarmos os testes, juntamente com os que ainda não existem, os inexistentes irão aparecer,
      como pending (pendente);
    - Mocha permite a execução de apenas um teste, é preciso usar a propridade "it.only"
      (que irá executar o teste que tenha esta propriedade), ou a propriedade "it.skip"
      (que irá pular a execução do deste, que tenha essa propriedade), a diferença entre o only e skip,
      que o último pulará o deste e irá deixá-lo como pendente, outro irá executar o teste;
    - Hooks, são formas, disponibilizadas pelo mocha, de executarmos os nossos teste, e evitar repetição.
      Além disso podemos usá-los, para limpar os mock´s, instânciar componentes, redefinir valores,
      entre outras coisas, hooks são extremamente úteis;
    - Tipos de Hook:
        - beforeEach;
        - before (executa no início de tudo);
        - after;
        - afterEach.
    - O assert é importado das bibliotecas do próprio node, ou seja, ele não é nativo do mocha;
*/

/*  Chai
    - Pelo assert ser um pouco limitado, e sua legibilidade não ser tão boa,
     quanto as funcionalidades do mocha, iremos utilizar o chai, ele é uma ferramenta, que
     provê uma série de assert´s;
    - O chai é uma ferramenta muito poderosa, além de melhorar a leitura do teste, possibilita,
      criar teste com objetos, etc. No seu site, possuí uma gama enorme de possibilidades de uso.
*/

/** Sinon
    - Permite mocar funções, e observar se elas foram invocadas;
    - Usar funções espiãs, permite que verifiquemos, se uma função
      foi invocada da maneira correta, por meio da propriedade "sinon.spy";
    - Substitui um método, com a propriedade "sinon.stub";
 */

 /* Obs.:
    - O uso das três ferramentas abordadas, ajuda a aplicar Tdd, e garantir a qualidade do software.
      Fora que pela legibilidade dos métodos, os próprios testes podem servir como documentação
 */

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function () {
    // hooks
    beforeEach(function () {
        value = 0; // garante que o valor sempre será zerado, em cada teste que ele seja utilizado, evitando assim sua repetição
    });

    it('Sum to numbers', function (done) {
        const math = new Math();
        this.timeout(3000); // seta o valor padrão de espera de execução dos teste (saindo de 2000ms >> 3000ms, neste caso)

        value = 5;

        // try {
        /*assert.equal(math.sum(5, 5), 10);*/ // assert.equal = verifica se o retorno de um método, é igual a um determinado resultado.
        // } catch (err) {
        // console.log(err);
        // }

        math.sum(value, 5, (value) => { // validação de código asssincrono
            expect(value).to.equal(10); // a forma do entendimento do código, ficaria mais ou menos assim: espero que o valor seja igual a 10
            done(); // garante que o teste irá aguardar a conclusão de um callbak, para finalizar os testes
        });
    });

    it('Multiply two numbers', function () {
        const math = new Math();
        const obj = {
            name: 'Wiliam Nascimento'
        }
        const obj2 = {
            name: 'Wiliam Nascimento'
        };

        expect(math.multiply(value, 3)).to.equal(0);
        expect(obj).to.have.property('name'); // espera que no objeto "obj", tenha uma propriedade chamada "name"
        expect(obj).to.have.property('name').equal('Wiliam Nascimento');
        /*expect(obj).to.equal(obj2);*/ // irá dar erro, pois embora tenham o mesmo conteúdo, o js entende que são objetos diferentes, por possuírem instâncias distintas
        expect(obj).to.deep.equal(obj2); // dará certo, pois irá comparar o conteúdo dentro dos objetos
    });

    it.only('Calls req with sum and index values', function () {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called');
            } 
        };

        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index'); // verifica se o primeiro argumanto enviado para a função é "index"
        expect(res.load.args[0][1]).to.equal(10); // verifica se o segundo argumento é o resultado da soma, dos valores enviados
    });
});