import { NgModule } from "@angular/core";
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            { // Objeto de rota, para a listagem de cursos
                path: 'courses', component: CourseListComponent
            },
            { // Objeto de rota, para informação de cursos
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule {

}