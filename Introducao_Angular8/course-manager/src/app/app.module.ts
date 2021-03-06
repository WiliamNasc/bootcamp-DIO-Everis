import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course-module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      { // Objeto de rota, para a base da aplicação
        path: '', redirectTo: 'courses', pathMatch: 'full'
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
      - component: Error404 = redireciona a rota inválida, para a página de não encontrado

      - Objeto de rotas, para rotas informação de curso
      - path: 'course/info/:id' = cria uma uma rota que recebe um parâmetro na url
      - component: CursoInfoComponent = recebe o parâmetro do path, e executa/mostra o conteúdo do componente
 */
