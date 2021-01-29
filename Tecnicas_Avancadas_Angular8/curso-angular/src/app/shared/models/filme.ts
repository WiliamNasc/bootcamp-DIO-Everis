export interface Filme {
  id?: number;
  titulo: string;
  urlFoto?: string;
  dtLancamento: Date;
  descricao?: string;
  nota: number;
  urlIMDb?: string;
  genero: string;
}

/* Anotações
 
- comando para criar uma interface:
ng g (generate) i (interface) shared/models/filme (caminho, e arquivo a ser criado, neste cenário, a pasta model, também será criada, por ela não existir ainda)

- atributo? = o "?", ao final de um atributo, têm o significado de campo opcional.

- esse modelo/contrato de dados de Filme, terá que ser respeitado, pela classe na qual o mesmo será implementado,
ou seja, o mesmo nome, tipos de valores dos atributos, que a interface possui, a outra classe, terá que provê-los,
esta interface, é uma forma de garantir a integridade dos dados.
Obs.: lembrando que se um novo atributo for adicionado aqui, o mesmo terá adição obrigatória a classes que implementam Filme.
 */
