import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star', // cria uma Html tag do nosso componente, no caso star, com o nome de tag "app-star"
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'] // indica a coleção de estilos do componente, os estilos aplicados desta forma, não irão ser aplicados nos demais componentes
})

export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; // o valor do cálculo pode variar, aparentemente é um bug, do font awesome
    }
}

/* Anotações

-@Input: faz com que seja possível, a troca de dados
, entre componentes diferentes.

-Font-awesome: é uma ferramenta de estilo, na qual iremos utilizar,
para o esquema de atribuição de estrelas dos cursos.
Para instalar usamos o comando: npm install font-awesome.
Após instalar, precisamos ir até o nosso arquivo de estilo global
(style.css), e importálo (@import '~font-awesome/css/font-awesome.min.css';).

-implements OnChanges: quando determinado serviço for
carregado, ele será disposto em tela (por padrão
está classe especializada é assincrona). Obrigatoriamente,
temos que implementar o método "ngOnChanges()".
Exemplo: (Neste cenário, estamos contabilizando a
quantidade de estrelas de um curso, como este valor
pode variar, ou ter algum tipo de problema com a rede,
por exemplo, o angular irá aguardar o fim deste processo,
para exibi-lo em tela)

*/