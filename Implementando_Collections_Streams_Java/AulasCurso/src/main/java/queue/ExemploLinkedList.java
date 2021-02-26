package queue;

import java.util.LinkedList;
import java.util.Queue;

public class ExemploLinkedList {

    public static void main (String[] args){
        Queue<String> filaDeBanco = new LinkedList<>();

        filaDeBanco.add("Pamela");
        filaDeBanco.add("Patrícia");
        filaDeBanco.add("Roberto");
        filaDeBanco.add("Flávio");
        filaDeBanco.add("Anderson");
        System.out.println("Fila do banco: " + filaDeBanco);

        var clienteAtendido = filaDeBanco.poll(); //remove/atende o primeiro elemento da fila
        System.out.println("Cliente atendido: " + clienteAtendido);

        System.out.println("Fila do banco: " + filaDeBanco);

        var primairoClienteNaFila = filaDeBanco.peek(); //devolve o primeiro elemento, da fila, caso não tenha elementos na fila, devolve null
        System.out.println("Primeiro da fila: " + primairoClienteNaFila);

        //filaDeBanco.clear(); //remove os elementos da fila

        var primeiroClienteOuErro = filaDeBanco.element(); // devolve o primeiro elemento, da fila, caso não tenha elementos na fila, estoura uma exceção de "NoSuchElementException"
        System.out.println("Primeiro da fila (sem erros, na fila): " + primeiroClienteOuErro);

        System.out.println("Fila do banco: " + filaDeBanco);

        System.out.print("Clientes na fila (com for each):");
        for (String cliente : filaDeBanco) {
            System.out.print(" " + cliente + " ");
        }

        System.out.println(); //pulando uma linha

        var iteratorFila = filaDeBanco.iterator();
        System.out.print("Clientes na fila (com while e iterator):");
        while (iteratorFila.hasNext()) {
            System.out.print(" " + iteratorFila.next() + " ");
        }

        System.out.println("Tamanho da fila: " + filaDeBanco.size());

        System.out.println("Fila vázia: " + filaDeBanco.isEmpty());

        filaDeBanco.add("Wesley");
        System.out.println("Fila do banco: " + filaDeBanco);
    }
}
