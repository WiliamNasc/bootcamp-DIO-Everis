import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'January, 15, 2020'

            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-8796',
                duration: 120,
                rating: 4.0,
                releaseDate: 'January, 17, 2020'

            }
        ];
    }
}

/* Anotações

-package.json: cuida das dependências do
projeto, e de suas configurações, tais
como a de inicialização.

-angular.json: cuida das configurações do
projeto, de forma global, tais como style
(que será aplicado a todos os componentes),
e scripts, por exemplo.

-main.ts: funciona como a classe
"public static void main" do java.

-Para avisar o angular, que um determinado
arquivo, é um componente, precisamos primeiro
importar as funções do core, e posteriormente,
construir os nossos objetos.
Exemplo:
@Component({
    selector: 'app-course-list',
    template: '<h2>Course List</h2>'
})

-template: usamos se tiver uma declaração,
de quatro a cinco linhas de elementos html,
mais do que isso não é recomendado, em todo
caso é melhor usar um arquivo externo, para os
elemenros html.
Exemplo de template:
@Component({
    selector: 'app-course-list',
    template: '<h2>Course List</h2>'
})

-templateUrl: usamos para referênciar
os nossos elementos/páginas html,de forma
externa.
Exemplo:
templateUrl: './course-list.component.html'

-Para adicionar o bootstrap em nosso projeto:
comando = npm install bootstrap

-Na importação e configuração, do bootstrap,
no projeto, fomos no arquivo "angular.json",
na parte de style, verificamos o caminho do
arquivo de estilo, inserimos a seguinte linha
de importação:
@import '~bootstrap/dist/css/bootstrap.min.css'
Obs.: o "~" serve como caminho relativo

-Ao importar algum arquivo, e configurá-lo
(como bootstrap) precisamos parar a aplicação
(Ctrl + C, no terminal)

- implements OnInit: implementado essa classe,
assim que o componente for inicializado, irá
acontecer determinada coisa, ao implementar a
classe, obrigatóriamente temos que implementar
o método "ngOnInit()".
Exemplo: (Neste caso, ao chamar o componente,
o array de courses, será preenchido com um valor)
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,

            }
        ];
    }
}
*/