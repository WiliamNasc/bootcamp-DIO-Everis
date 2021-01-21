import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    // selector: 'app-course-list', Só usamos o selector quando nos referenciamos/ativamos o nosso componente por meio de tags, agora faremos isso por meio de rotas
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string; // "_", indica para os outros desenvolvedores, que a variável deve ficar somente nesta classe

    constructor(private courseService: CourseService) { } // injeção de dependência, o angular faz injeção de dependência por de métodos construtores

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Delete with sucess');
                this.retrieveAll(); // irá atualizar a lista de cursos, após remoção de um item
            },
            error: err => console.log('Error ', err)
        });
    }

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => {
            return course.name
                .toLocaleLowerCase()
                .indexOf(this._filterBy.toLocaleLowerCase()) > -1
        });
    }

    get filter() {
        return this._filterBy;
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

- implements OnInit: implementando essa classe,
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