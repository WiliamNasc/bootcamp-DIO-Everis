package set;

import java.util.HashSet;
import java.util.Set;

public class ExemploHashSet {

    public static void main (String[] args) {
        Set<Double> notasAlunos = new HashSet<>();

        //Adicionando as notas no HashSet
        notasAlunos.add(5.8);
        notasAlunos.add(9.3);
        notasAlunos.add(6.5);
        notasAlunos.add(10.0);
        notasAlunos.add(5.4);
        notasAlunos.add(7.3);
        notasAlunos.add(3.8);
        notasAlunos.add(4.0);
        System.out.println("Notas, de alunos: " + notasAlunos);

        //Removendo nota do HashSet
        notasAlunos.remove(3.8);
        System.out.println("Notas de alunos (após remoção de nota): " + notasAlunos);

        //Retorna a quantidade de itens do HashSet
        System.out.println("Quantidade de notas, registradas: " + notasAlunos.size());

        //Navega em todos os itens do iterator
        var iterartor = notasAlunos.iterator();

        System.out.print("Notas registradas (while, e iterator):");
        while (iterartor.hasNext()) {
            System.out.print(" " + iterartor.next() + " ");
        }
        System.out.println();

        //Navega em todos os itens com for each
        System.out.print("Notas registradas (for each):");
        for (var nota : notasAlunos) {
            System.out.print(" " + nota + " ");
        }
        System.out.println();

        //Limpando/Removendo os itens do HashSet
        notasAlunos.clear();

        //Retornando se o HashSet está ou não vázio
        System.out.println("Os registros estão vázios: " + notasAlunos.isEmpty());

    }
}
