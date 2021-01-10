/* Event Emitter:
   - É uma forma de lidar com a programação assincrona,
     através de eventos;
   - Outra maneira de usar os eventos, seria o EventTarget, que é
     nativo dos navegadores, porém ele não possui métodos como o "once",
     do node, para tratar os eventos.
*/
const EventEmitter = require('events'); // importação do EventEmitter

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => { // escuta todas as requisições
    console.log(data);
});

/*users.once('User logged', data => { // escuta apenas uma requisição
    console.log(data);
});*/

users.userLogged({ user: 'Wiliam Nascimento' }); // será logado apenas
users.userLogged({ user: 'José Carlos' }); // não será logado, caso seja executado o método once
