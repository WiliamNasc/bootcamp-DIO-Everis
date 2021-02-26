package streamAPI;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

public class ExemploStreamAPI {
    public static void main (String[] args) {
        //Cria uma coleção de estudantes
        List<String> estudantes = new ArrayList<>();

        //Adiciona 4 estudantes na coleção
        estudantes.add("Pedro");
        estudantes.add("Thayse");
        estudantes.add("Marcelo");
        estudantes.add("Carla");
        estudantes.add("Juliana");
        estudantes.add("Thiago");
        estudantes.add("Rafael");

        //Retorna a contagem de elementos do stream
        System.out.println("Contagem: " + estudantes.stream().count());

        //Retorna o elemento com o maior número de letras
        System.out.println("Maior número de letras: " +
                estudantes.stream().max(Comparator.comparingInt(String::length)));

        //Retorna o elemento com o menor número de letras
        System.out.println("Menor número de letras: " +
                estudantes.stream().min(Comparator.comparingInt(String::length)));

        //Retorna os elementos que tem a letra R no nome
        System.out.println("Com a letra R no nome: " + estudantes.stream().filter((estudante) ->
            estudante.toLowerCase().contains("r")).collect(Collectors.toList()));

        //Retorna uma nova coleção, com os nomes concatenados a quantidade de letras de cada nome
        System.out.println("Retorna uma coleção com a quantidade de letras: " + estudantes.stream()
                .map(estudante -> estudante.concat(" - ").concat(String.valueOf(estudante.length())))
                .collect(Collectors.toList()));

        //Retorna somente os 3 primeiros elementos da coleção
        System.out.println("Retorna os 3 primeiros elementos: " + estudantes.stream()
                .limit(3)
                .collect(Collectors.toList()
        ));

        //Exibe cada elemento no console, e depois retorna a mesma coleção
        System.out.println("Retorna os elementos: " + estudantes.stream()
                .peek(System.out::println)
                .collect(Collectors.toList()));

        //Exibe cada elemento no console sem retornar outra coleção
        System.out.println("Retorna os elementos novamente: ");
        estudantes.stream().forEach(System.out::println);

        //Retorna true se todos os elementos possuem a letra W no nome
        System.out.println("Tem algum elemento com W no nome: " + estudantes.stream()
                .allMatch((elemento) -> elemento.contains("W")));

        //Retorna true se algum dos elementos possuem a letra a minúscula no nome
        System.out.println("Tem algum elemento com a letra a, minúsculo no nome: " + estudantes.stream()
            .anyMatch((elemento) -> elemento.contains("a")));

        //Retorna true se nenhum dos elemento possue a letra a minúsculo no nome
        System.out.println("Não tem nenhum elemento com a letra a, minúsculo no nome: " + estudantes.stream()
                .noneMatch((elemento) -> elemento.contains("a")));

        //Retorna o primeiro elemento da coleção, se esxistir no console
        System.out.println("Primeiro elemento da coleção:");
        estudantes.stream().findFirst().ifPresent(System.out::println);

        //Exemplo de operação encadeada
        System.out.println("Operação encadeada: ");
        System.out.println(estudantes.stream()
            .peek(System.out::println)
            .map(estudante -> estudante.concat(" - ").concat(String.valueOf(estudante.length())))
            .peek(System.out::println)
            .filter((estudante) -> estudante.toLowerCase().contains("r"))
            .collect(Collectors.toList()));
    }
}
