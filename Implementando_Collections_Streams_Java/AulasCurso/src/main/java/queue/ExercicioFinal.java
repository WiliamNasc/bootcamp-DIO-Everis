package queue;


import java.util.LinkedList;
import java.util.Queue;

public class ExercicioFinal {

    public static void main (String[] args) {
        //Crie uma fila
        Queue<String> filaDaPadaria = new LinkedList<>();

        //Adicione 5 nomes: Juliana, Pedro, Carlos, Larissa, e João
        filaDaPadaria.add("Juliana");
        filaDaPadaria.add("Pedro");
        filaDaPadaria.add("Carlos");
        filaDaPadaria.add("Larissa");
        filaDaPadaria.add("João");

        //Navegue na fila, exibindo cada nome no console
        System.out.print("Clientes, na fila da padaria:");
        for (String nomeCliente : filaDaPadaria) {
            System.out.print(" " + nomeCliente + " ");
        }

        System.out.println();

        //Retorne o primeiro item da fila, sem removê-lo
        var primeiroClienteNaFila = filaDaPadaria.peek();
        System.out.println("Primeiro cliente, na fila: " + primeiroClienteNaFila);
        //Retorne o primeiro item da fila, removendo o mesmo
        var clienteAtendido = filaDaPadaria.poll();
        System.out.println("Cliente atendido: " + clienteAtendido);

        //Adicione um novo nome: Daniel. Verifique a posição que o mesmo assumiu na fila
        filaDaPadaria.add("Daniel");
        System.out.println("Fila da padaria: " + filaDaPadaria);

        //Retorne o tamanho da lista
        System.out.println("Tamanho da Fila: " + filaDaPadaria.size());

        //Verifique se a fila está vázia
        System.out.println("Fila vázia: " + filaDaPadaria.isEmpty());

        //Verifique se o nome Carlos está na fila
        System.out.println("Carlos está na fila: " + filaDaPadaria.contains("Carlos"));
    }
}
