package optional;

import java.util.Optional;

public class ExemploOptional {
    public static void main (String[] args) {
        Optional<String> optionalString = Optional.of("Valor presente");

        System.out.println("Valor está presente (is present): " + optionalString.isPresent());
        System.out.println("Valor está vazio (is empty): " + optionalString.isEmpty());

        optionalString.ifPresent(System.out::println); // mostra o valor presente

        optionalString.ifPresentOrElse(System.out::println, () -> System.out.println("Valor não está presente"));

        if (optionalString.isPresent()) {
            String valor = optionalString.get();
            System.out.println("Valor recebido (por if): " + valor);
        }

        /*
            Para pegar o valor do optional, sem o risco de gerar uma exception, é aconselhável garantir a existência do
            valor antes de pegá-lo, neste exemplo, fizemos isso no if acima.
        */

        optionalString.map((valor) -> valor.concat("****")).ifPresent(System.out::println);

        /*
            optionalString.map((valor) -> valor.concat("****")).ifPresent(System.out::println)
                O map, pega um valor, e o transforma em outro, no nosso caso pegamos o "Valor presente",
                e o transformamos em "Valor presente****",
                e se o valor estiver presente, o valor alterado será mostrado
        */

        optionalString.orElseThrow(IllegalStateException::new);

        /*
            optionalString.orElseThrow(IllegalStateException::new):
                Se o valor do optinalString, estiver presente, retorne o valor (nesse caso sem mostrá-lo)
                , se não, lance uma exceção
        */
    }
}
