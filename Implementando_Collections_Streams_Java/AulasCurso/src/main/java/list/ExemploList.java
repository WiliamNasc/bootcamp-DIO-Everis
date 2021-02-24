package list;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ExemploList {
    public static void main (String[] args) {

        List<String> nomes = new ArrayList<>(); //Instanciando uma lista de String´s, do tipo ArrayList

        nomes.add("Carlos");
        nomes.add("Pedro");
        nomes.add("Juliana");
        nomes.add("Anderson");
        nomes.add("Maria");
        nomes.add("João");
        nomes.add("Bruno");

        System.out.println("Lista original\n"  + nomes);

        nomes.set(2, "Larissa"); //atualiza o valor de um determinado índice, dado um novo valor

        System.out.println("Lista com o elemento alterado\n" + nomes);

        nomes.set(2, "Wiliam"); //atualiza o valor de um determinado índice, dado um novo valor

        Collections.sort(nomes); //ordena os elementos da lista, neste caso, em ordem alfabética

        System.out.println("Lista com elemento alterado, e com ordenação\n" + nomes);

        nomes.remove(2); //remove um elemento, de determinado índice

        System.out.println("Lista com elemento removido (pelo índice)\n" + nomes);

        nomes.remove("Bruno");

        System.out.println("Lista com elemento removido (pelo objeto, no caso uma String)\n" +nomes);

        var nome = nomes.get(4); //pega/retorna um elemento da lista, dado um índice

        //var nomeErro = nomes.get(100); //se passarmos um índice que não existe na lista, ocorrerá um erro "comum" em utilização de listas o "IndexOutOfBoundsException"

        System.out.println("Nome retornado da lista, através do índice de um elemento: " + nome);

        var posicaoNome = nomes.indexOf("Wiliam"); //dado um objeto/elemento (no caso uma String) da lista, retorna a posição do mesmo, dentro da lista

        System.out.println("Posição na lista, do nome: " + posicaoNome);

        var tamanho = nomes.size(); //retorna o tamanho da lista

        System.out.println("Tamanho da Lista: " + tamanho);

        nomes.remove("Anderson");

        tamanho = nomes.size();

        System.out.println("Tamanho da Lista (após a remoção de um elemento): " + tamanho);

        var temWiliam = nomes.contains("Wiliam"); //Dado um objeto (neste caso, uma String), devolve um true ou false, caso o objeto informado, exista na lista, caso o retorno, seja -1, o elemento na existe dentro da lista

        System.out.println("Existe algum Wiliam na Lista: " + temWiliam);

        var temAnderson = nomes.contains("Anderson");

        System.out.println("Existe algum Anderson na Lista: " + temAnderson);

        var listaVazia = nomes.isEmpty();

        System.out.println("A lista está vázia: " + listaVazia);

        System.out.println("Itens da Lista (com for each):");
        for (String nomeDoItem : nomes) { //Itera um nomeDoItem, para cada item, dentro de nomes
            System.out.println("-->" + nomeDoItem);
        }

        var iterator =  nomes.iterator();

        System.out.println("Itens da Lista (com while, usando iterator): ");
        while (iterator.hasNext()) { // "iterator.hasNext" - retorna um boolean, sempre que existe um elemento na lista
            System.out.println("-->" + iterator.next()); // "iterator.next" - retorna o objeto iterado, no momento
        }

        nomes.clear(); //limpa/remove todos os elementos da Lista

        listaVazia = nomes.isEmpty();

        System.out.println("A lista está vázia (após limpar a Lista): " + listaVazia);
    }
}
