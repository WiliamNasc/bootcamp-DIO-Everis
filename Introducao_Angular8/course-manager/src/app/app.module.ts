import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404 } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { // Objeto de rota, para a base da aplicação
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      { // Objeto de rota, para a listagem de cursos
        path: 'courses', component: CourseListComponent
      },
      { // Objeto de rota, para rotas não encontradas
        path: '**', component: Error404
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/** Anotações
  -Rotas:
    - Para começar a trabalhar com rotas, primeiro deve-se importar o módulo de rotas:
    import { RouterModule } from '@angular/router';

    - Depois importálo na parte de imports:
    imports: [
    BrowserModule,
    FormsModule,
    RouterModule <<<
    ]

    - E, configurá-lo, com os objetos de rotas (neste caso, estamos configurando as rotas para o root, da aplicação):
      RouterModule.forRoot([
      { // Objeto de rota, para a base da aplicação
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      { // Objeto de rota, para a listagem de cursos
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component:Error404
      }
    ])

    - obs.: path = url de uma rota (http: // .... ou localhost: ....)
    - obs.: Rotas padrão, do angular
        - path: ''= Carrega as rotas no root da aplicação, ou seja, ao iniciar o software as rotas serão carregadas
        - path: '**' = Se uma determinada rota, não for encontrada, indicamos um local de redirecionamento

    - Explicações:
      - Objeto de rotas, para a base da aplicação
      - path: '' = significa que uma rota será ativada, neste caso, na base da aplicação
      - redirectTo: 'course' = significa o local (podendo ser um component, ou rota) que será chamado, neste caso, o local se trata de uma rota
      - pathMatch: 'full' = ele é um complemento do redirectTo, quando estamos querendo redirecionar para uma rota, ao invés de um componente

      - Objeto de rotas, para a listagem de cursos
      - path: 'course' = cria uma rota para a listagem de cursos
      - component: 'CourseListComponent' = linca a rota 'courses', com o componente 'CourseListComponent',

      - Objeto de rotas, para rotas não encontradas
      - path: '**' = é uma rota, para quando uma determinada rota, não for encontrada
      - component: '' =
 */
