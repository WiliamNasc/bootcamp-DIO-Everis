package set;

import java.util.TreeSet;

public class ExemploTreeSet {

    public static void main (String[] args) {
        TreeSet<String> treeCapitais = new TreeSet<>();

        //Montando a árvore (TreeSet) com as capitais
        treeCapitais.add("Porto Alegre");
        treeCapitais.add("Florianópolis");
        treeCapitais.add("Curitiba");
        treeCapitais.add("São Paulo");
        treeCapitais.add("Rio de Janeiro");
        treeCapitais.add("Belo Horizonte");

        //Exibindo as capitais no console
        System.out.println("Capitais registradas: " + treeCapitais);

        //Retornando a primeira capital, no topo da árvore
        System.out.println("Capital, no topo, da árvore: " + treeCapitais.first());

        //Retornando a última capital, no final da árvore
        System.out.println("Capital, no final da árvore: " + treeCapitais.last());

        //Retornando a primeira capital abaixo, de dada capital, na árvore
        System.out.println("Capital, abaixo de Florianópolis, na árvore: " + treeCapitais.lower("Florianópolis"));

        //Retornando a primeira capital acima, de dada capital, na árvore
        System.out.println("Capital acima de Florianópolis, na árvore: " + treeCapitais.higher("Florianópolis"));

        //Exibe todas as capitais no console
        System.out.println("Capitais registradas: " + treeCapitais);

        //Retornando, e removendo a capital no topo da árvore
        System.out.println("Capital removida, do topo, da árvore: " + treeCapitais.pollFirst());

        //Retornando, e removendo a capital no da árvore
        System.out.println("Capital removida, do final da árvore: " + treeCapitais.pollLast());

        //Exibindo as capitais no console
        System.out.println("Capitais registradas: " + treeCapitais);

        //Navega em todos os itens do iterator
        var iterator = treeCapitais.iterator();
        System.out.print("Itens na árvore (while e iterator):");
        while (iterator.hasNext())
            System.out.print(" " + iterator.next() + " ");

        System.out.println();

        //Navega em todos os itens com for each
        System.out.print("Itens na árvore (for each):");
        for (var capital : treeCapitais)
            System.out.print(" " + capital + " ");
    }

}
