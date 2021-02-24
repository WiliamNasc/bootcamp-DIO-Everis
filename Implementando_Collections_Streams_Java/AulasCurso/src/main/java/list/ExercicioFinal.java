package list;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ExercicioFinal {
    public static void main (String[] args) {
        //Crie uma lista
        List<String> listaNomes = new ArrayList<>();

        //Adicione 5 nomes: Juliana, Pedro, Carlos, Larrisa, e João
        listaNomes.add("Juliana");
        listaNomes.add("Pedro");
        listaNomes.add("Carlos");
        listaNomes.add("Larrisa");
        listaNomes.add("João");

        //Navegue na lista, exibindo cada nome no console
        System.out.print("Itens, da lista: [");
        for (String nome : listaNomes) {
            System.out.print(" " + nome + " ");
        }
        System.out.print("]\n");

        //Substitua o nome Carlos, por Roberto
        var nomeAlterado = listaNomes.set(2, "Roberto");
        System.out.println("Nome Alterado: " + nomeAlterado);

        //Retorne o nome na posição 1
        var nomePosicaoUm = listaNomes.get(1);
        System.out.println("Nome, na posição 1, da lista: " + nomePosicaoUm);

        //Remova o nome da posição 4
        var nomeRemovidoPorIndice = listaNomes.remove(4);
        System.out.println("Nome removido, por índice: " + nomeRemovidoPorIndice);

        //Remova o nome João
        var nomeRemovidoPorObjeto = listaNomes.remove("João"); //ocorrerá um erro, pois o elemento já foi removido da lista
        System.out.println("O nome João foi removido, por objeto: " + nomeRemovidoPorObjeto);

        //Retorne a quantidade de itens da lista
        var qtdItensLista = listaNomes.size();
        System.out.println("Quantidade, de itens da lista: " + qtdItensLista);

        //Verifique se o nome Juliana existe na lista
        var julianaExisteNaLista = listaNomes.contains("Juliana");
        System.out.println("Juliana existe na lista: " + julianaExisteNaLista);

        //Crie uma nova lista com os nomes: Ismael e Rodrigo
        List<String> listaComPoucosNomes = new ArrayList<>();

        listaComPoucosNomes.add("Ismael");
        listaComPoucosNomes.add("Rodrigo");

        //Adicione todos os itens da nova lista, na primeira lista criada
        listaNomes.addAll(listaComPoucosNomes);
        System.out.println("Lista concatenada: " + listaNomes);

        //Ordene os itens da lista, por ordem alfabética
        Collections.sort(listaNomes);
        System.out.println("Lista ordenada: " + listaNomes);

        //Verifique se a lista está vázia
        var listaVazia = listaNomes.isEmpty();
        System.out.println("A lista está vázia: " + listaVazia);
    }
}
