import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace);
    }
}

/* Anotações

-@Pipe: é uma anotação, que informa ao angular,
que a classe existe para criar pipes

-implements PipeTransform: possibilita a criação
de pipe que modifica alguma coisa, no nosso caso,
um texto. Porém, para fazer essa atividade, devemos
implementar o método "transform" (de maneira livre)

-Após criar o pipe, devemos ir até o arquivo "app.modules",
importar o nosso modulo, e chamá-lo junto com os demais,
para que o angular possa executá-lo ao iniciar a aplicação.

-Exemplo de chamada do pipe criado:
<p>aa-bb | replace : '-' : ' ' </p> - Saída: aa bb

*/