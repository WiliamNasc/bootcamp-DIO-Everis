package set;

import java.util.HashSet;

public class ExercicioFinal {

    public static void main (String[] args) {
        //Crie um Set (HashSet, LinkedHashSet, ou TreeSet)
        HashSet<Integer> numeros = new HashSet<>();

        //adicione 5 números inteiros: 3, 88, 20, 44, 3
        numeros.add(3);
        numeros.add(88);
        numeros.add(20);
        numeros.add(44);
        numeros.add(3);

        //navegue no set exibindo cada número no console
        System.out.print("números: ");
        for (var numero : numeros)
            System.out.print(" " + numero + " ");

        System.out.println();

        //remova o primeiro item do set
        numeros.remove(3);

        //adicione um novo número no set: 23
        numeros.add(23);

        //verifique o tamanho do set
        System.out.println("Tamanho do set: " + numeros.size());

        //verifique se o set está vázio
        System.out.println("O set está vázio: " + numeros.isEmpty());
    }
}
