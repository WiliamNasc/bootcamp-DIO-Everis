package set;

import java.util.LinkedHashSet;

public class ExemploLinkedHashSet {

    public static void main (String[] args) {
        LinkedHashSet<Integer> sequenciaNumerica = new LinkedHashSet<>();

        //Adicionando números no LinkedHashset
        sequenciaNumerica.add(1);
        sequenciaNumerica.add(2);
        sequenciaNumerica.add(4);
        sequenciaNumerica.add(8);
        sequenciaNumerica.add(16);
        System.out.println("Sequência numérica, registrada: " + sequenciaNumerica);

        //Removendo número do LinkedHashSet
        sequenciaNumerica.remove(4);
        System.out.println("Sequência numérica, registrada (após remoção de número): " + sequenciaNumerica);

        //Retornando a quantidade de itens no LinkedHashSet
        System.out.println("Quantidade de números registrados, na sequência numérica: " + sequenciaNumerica.size());

        //Navegando em todos os itens do iterator
        var iterator = sequenciaNumerica.iterator();
        System.out.print("Itens da sequência numérica (while  e iterator):");
        while (iterator.hasNext())
            System.out.print(" " + iterator.next() + " ");

        System.out.println();

        //Navegando em todos os itens com for each
        System.out.print("Itens da sequência numérica (for each):");
        for (var numero : sequenciaNumerica)
            System.out.print(" " + numero + " ");

        System.out.println();

        //Retornando se o LinkedHashSet está ou não vázia
        System.out.println("A sequência numérica, está vázia: " + sequenciaNumerica.isEmpty());
    }

}
