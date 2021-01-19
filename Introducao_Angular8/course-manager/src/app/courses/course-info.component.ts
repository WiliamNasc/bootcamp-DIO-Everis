import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {
    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }
}

/** Anotações
    - ActivatedRoute = permite que peguemos informações de uma rota;
    - this.activatedRoute.snapshot.paramMap.get('id') = "tira uma foto" do que têm na url no exato momento,
    , pega o valor de id, e o tranforma em um número.
    - Obs.: Quando o nosso componente for ativado, ele executará as suas funções (por conta do OnInit)
 */