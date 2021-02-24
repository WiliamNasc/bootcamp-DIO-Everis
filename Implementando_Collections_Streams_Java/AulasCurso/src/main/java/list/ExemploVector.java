package list;

import java.util.List;
import java.util.Vector;

public class ExemploVector {
    public static  void main (String[] args){
        List<String> esportes = new Vector<>(); //Intanciando uma lista de String, do tipo Vector

        //Adicionando 4 esportes ao vetor
        esportes.add("Futebol");
        esportes.add("Basquetebol");
        esportes.add("Tênis de mesa");
        esportes.add("Handbol");

        //Alterando a posição 2, do vetor
        esportes.set(2, "Ping Pong");

        //Removendo item, da posição 2, do vetor
        esportes.remove(2);

        //Removendo o item "HandBol", do vetor
        esportes.remove("Handbol");

        //Pega/Retorna o primeiro item do vetor
        System.out.println("Primeiro item, do vetor: " + esportes.get(0));

        //Navegando, com for each, pelos itens do vetor
        System.out.println("Itens, do vetor: ");
        for (String esporte : esportes) {
            System.out.println("*" + esporte);
        }
    }
}
