package optional;

import java.util.Optional;

public class ExemploOptionalEstados {
    public static void main (String[] args){
        Optional<String> optionalString = Optional.of("Valor presente");

        System.out.println("Valor opcional, que está presente");
        optionalString.ifPresentOrElse(System.out::println, () -> System.out.println("Não está presente"));
        /*
            - ".ifPresentOrElse": se o valor estiver presente, devolva o valor, se não, devolva uma mensagem de que
           o valor não está presente.

            primeiro argumento (action):
            função labda (reduzida, que poderia ser: (valor) -> System.out.println(valor)), com parâmetro (valor),
            mostrando o valor definido, em Optional.of("Valor presente");

          segundo parâmetro (runnable):
            função lambda, sem parâmetro, que mostra uma mensagem mostrando que o valor não está presente
        */

        Optional<String> optionalNull = Optional.ofNullable(null);

        System.out.println("Valor opcional que não está presente");
        optionalNull.ifPresentOrElse(System.out::println, () -> System.out.println("null = não está presente"));

        Optional<String> emptyOptional = Optional.empty();

        System.out.println("Valor opcional que não está presente");
        emptyOptional.ifPresentOrElse(System.out::println, () -> System.out.println("empty = não está presente"));

        Optional<String> optionalNullErro = Optional.of(null);

        System.out.println("Valor opcional que lança erro NullPointerException");
        optionalNullErro.ifPresentOrElse(System.out::println, () -> System.out.println("erro = não está presente"));

        /*
            - Existem três formas de construir  um valor de Optional:
                Optinal.of(valor) - com valor
                Optional.Nullable(null) - nulo
                Optional.empty() - vázio

           - Se passarmos um valor nulo para o "Optinal.of(valor)", ocorrerá uma exception de "NullPointerException"

        */

    }
}
