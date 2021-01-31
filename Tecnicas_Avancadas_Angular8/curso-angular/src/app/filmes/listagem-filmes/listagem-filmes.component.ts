import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';
import { ConfigPrams } from 'src/app/shared/models/config-prams';

@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  config: ConfigPrams = {
    pagina: 0,
    limite: 4
  };
  filmes: Filme[] = [];
  filtrosListagem: FormGroup;
  generos: Array<string>;
  lerDescricao: boolean = true;

  constructor(private filmesService: FilmesService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      genero: ['']
    });

    this.filtrosListagem.get('texto').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.pesquisa = val;
      this.resetarConsulta();
    });

    this.filtrosListagem.get('genero').valueChanges.subscribe((val: string) => {
      this.config.campo = {tipo: 'genero', valor: val};
      this.resetarConsulta();
    });

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    this.listarFilmes();
  }

  onScroll(): void {
    this.listarFilmes();
  }

  abrir(id: number): void {
    this.router.navigateByUrl('/filmes/' + id);
  }

  exibirDescricao(mostrar: boolean): void {
    this.lerDescricao = mostrar;
  }

  private listarFilmes(): void {
    this.config.pagina++;
    this.filmesService.listar(this.config)
      .subscribe((filmes: Filme[]) => this.filmes.push(...filmes));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.filmes = [];
    this.listarFilmes();
  }
}

/* Anotações
  
- comando para instalar o scroll infinito:
  npm install ngx-infinite-scroll --save
  Obs.: este recurso não é nativo do angular,
  o pacote foi escolhido, pois na época do
  desenvolvimento do curso, o scroll infinito
  nativo do angular, não era tão fácil de utilizar, e 
  apresentava problemas, em ambiente de produção.

  - a importação do infinitescroll (scroll infinito),
  está em "filmes.module", pois só iremos usar o recurso,
  apenas na listagem de filmes.

  - para controlar o scroll infinito, vamos utilizar o
  recurso "paginate" do json server (onde estamos simulando o nosso backend),
  por meio dele, vamos configurar o nosso método get (dentro de filmes.service),
  de modo a estabelecer um limite de consultas, para cada página.
  Obs.: para fazer a "configuração", vamos utilizar o httpParams, onde iremos
  passar o número da nossas página, e o limite da consulta para ela, este objeto
  , não aceita vários "set´s" (ou mudanças), então temos que receber o primeiro set no objeto, referente a
  de página, e posteriormente outro, referente ao limite. Por exemplo:
  httpParams = httpParams.set('_page', config.pagina.toString());
  httpParams = httpParams.set('_limit', config.pagina.toString());

  - variáveis do tipo "readonly", não podem ser alteradas, somente podem ser lidas.

  - this.filmes.push(...filmes) != this.filmes = filmes: no primeiro estamos usando
  o spread operator, com o objetivo de passar uma lista (onde item a item será passado,
  para a outra lista, de maneira gradual), ou seja a cada nova adição, serão adicionados 
  novos filmes, no segundo estaremos substituindo o objeto inteiro, a cada chamada, por 
  exemplo.
  Obs.: Caso ocorra algum erro, tavez seja por que a lista está "undefined", então precisamos
  iniciar o nosso array, com um valor inicial, por exemplo: filmes: Filme [] = []. Como o typescript,
  na época deste curso, não possui o safe navegation (navegação segura), utilizando o elvis operator (?),
  precisamo utilizar deste artificio, caso contrário, bastaria fazer isso: this.filmes?.push(...filmes).
  
  - a função de scroll infinito, têm que ser adicionado a um container, que retem conteúdos, não propriamente
  aos conteúdos, isso significa que as consultas no primeiro, serão de acordo com a grade completa, no último
  , não, as consultas seriam feitas, a partir do momento que o conteúdo estivesse em tela.
  Obs.: O scroll infinito, faz a consulta, ao atingir 20% da página (ou elemento), que esteja com sua propriedade.

  - ordenação de imports: primeiro imports do angular, segundo import de terceiros, terceiro (ou último) os
  nossos import´s.

  - debounceTime: nos permiti estabelecer um tempo, para realizar uma consulta, de acordo com o tempo estipulado,
  isso nos ajuda a controlar o fluxo de consultas realizadas ao backend, o que é ótimo para a performance da aplicação.
 */
