package map;

import java.util.HashMap;
import java.util.Map;

public class ExemploHashMap {

    public static void main (String[] args) {

        Map<String, Integer> campeoesCopaDoMundo = new HashMap<>();

        //Adicionando campeões do mundo, no mapa
        campeoesCopaDoMundo.put("Brasil",5);
        campeoesCopaDoMundo.put("Alemanha",4);
        campeoesCopaDoMundo.put("Itália",4);
        campeoesCopaDoMundo.put("Uruguai",2);
        campeoesCopaDoMundo.put("Argentina", 2);
        campeoesCopaDoMundo.put("França",2);
        campeoesCopaDoMundo.put("Inglaterra",1);
        campeoesCopaDoMundo.put("Espanha",1);
        System.out.println("Campeões da copa do mundo: " + campeoesCopaDoMundo);

        //Atualizando o valor da chave Brasil
        campeoesCopaDoMundo.put("Brasil", 6);
        System.out.println("Campeões da copa do mundo (atualizado): " + campeoesCopaDoMundo);

        //Retornando a Argentina
        System.out.println("Número de títulos do maior rival do Brasil: " + campeoesCopaDoMundo.get("Argentina"));

        //Retornando se existe ou não, um campeão com a chave França
        System.out.println("A França existe no mapa: " + campeoesCopaDoMundo.containsKey("França"));

        //Removendo a França dos campeões
        campeoesCopaDoMundo.remove("França");

        //Retornando se existe ou não, um campeão com a chave França
        System.out.println("A França existe no mapa (após a sua remoção): " + campeoesCopaDoMundo.containsKey("França"));

        //Retornando se existe uma seleção com 6 títulos
        System.out.println("Existe alguma seleção, com 6 títulos (nesse mapa): " + campeoesCopaDoMundo.containsValue(6));

        //Retornando o tamanho do mapa
        System.out.println("Tamanho do mapa: " + campeoesCopaDoMundo.size());
        System.out.println("Campeões da copa do mundo: " + campeoesCopaDoMundo);

        //Navegando nos registros do mapa
        System.out.println("Navegação, por for (entry)");
        for (Map.Entry<String, Integer> entry : campeoesCopaDoMundo.entrySet()) {
            System.out.println("Campeão: " + entry.getKey() + " - " + "Títulos: " + entry.getValue());
        }

        //Navegando nos registros do mapa
        System.out.println("Navegação, por for (key)");
        for (var key : campeoesCopaDoMundo.keySet()) { //Essa é a opção menos performática
            System.out.println("Campeão: " + key + " - " + "Títulos: " + campeoesCopaDoMundo.get(key));
        }

        System.out.println("Campeões da copa do mundo: " + campeoesCopaDoMundo);

        //Verifica se o mapa contém a chave Estados Unidos
        System.out.println("O mapa possuí os Estados Unidos: " + campeoesCopaDoMundo.containsKey("Estados Unidos"));

        //Verifica se o mapa, tem o valor 5
        System.out.println("O mapa contém o valor 5: " + campeoesCopaDoMundo.containsValue(5));

        //Verifica o tamanho do mapa, antes de limpá-lo
        System.out.println("Tamanho do mapa (antes de limpá-lo): " + campeoesCopaDoMundo.size());

        //limpando o mapa
        campeoesCopaDoMundo.clear();

        //Verifica o tamanho do mapa, após limpá-lo
        System.out.println("Tamanho do mapa (após limpá-lo): " + campeoesCopaDoMundo.size());

    }

}
