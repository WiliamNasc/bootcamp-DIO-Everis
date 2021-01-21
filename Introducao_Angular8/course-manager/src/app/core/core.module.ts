import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404 } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { // Objeto de rota, para rotas não encontradas
                path: '**', component: Error404
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}