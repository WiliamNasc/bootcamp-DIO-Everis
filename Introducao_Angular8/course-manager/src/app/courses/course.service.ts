import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {
    retrieveAll(): Course[] {
        return COURSES;
    }

    retrieveById(id: number): Course {
        return COURSES.find((courseInterator: Course) => courseInterator.id === id); //irá percorrer o array, até a condição for satisfeita, e devolver um elemento (de acordo com a condição determinada)
    }

    save(course: Course): void {
        if (course.id) {
            const index = COURSES.findIndex((courseInterator: Course) => courseInterator.id === course.id); // assim que a condição for satisfeita, será retornado o index do array (de acordo com a condição determinada)
            COURSES[index] = course;
        }
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];

/* Anotações

-@Injectable: Faz a injeção de dependências e informa ao angular.
Exemplo: (Quando o módulo principal for carregado, as informações
do service serão implementadas)
@Injectable({
    providedIn: 'root'
})

-Uma boa prática em uma classe de serviço, é utilizar somente métodos,
e se for caso de possuir variáveis, usá-las como estáticas, para que 
os valores não possam ser alterados
*/
