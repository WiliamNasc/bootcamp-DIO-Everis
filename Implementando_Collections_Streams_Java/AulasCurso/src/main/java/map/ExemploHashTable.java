package map;

import java.util.Hashtable;
import java.util.Map;

public class ExemploHashTable {

    public static void main (String[] args) {
        Hashtable<String, Integer> estudantes = new Hashtable<>();

        estudantes.put("Carlos", 21);
        estudantes.put("Mariana", 33);
        estudantes.put("Rafaela", 18);
        estudantes.put("Pedro", 44);
        System.out.println("Estudantes: " + estudantes);

        estudantes.put("Pedro", 55);
        System.out.println("Estudantes (atualizado): " + estudantes);

        estudantes.remove("Pedro");
        System.out.println("Estudantes (após remoção): " + estudantes);

        int idadeEstudante = estudantes.get("Mariana");
        System.out.println("Idade de Mariana: " + idadeEstudante);

        System.out.println("Tamanho do HashTable: " + estudantes.size());

        System.out.println("Itens HashTable (entry): ");
        for (Map.Entry<String, Integer> entry : estudantes.entrySet())
            System.out.println(entry.getKey() + ": " + entry.getValue());

        System.out.println("Itens HashTable (key): ");
        for (var key : estudantes.keySet())
            System.out.println(key + ": " + estudantes.get(key));

        System.out.println("Estudantes: " + estudantes);

    }

}
