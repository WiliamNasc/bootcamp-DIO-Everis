package map;

import java.util.Map;
import java.util.TreeMap;

public class ExemploTreeMap {

    public static void main (String[] args) {
        TreeMap<String, String> treeCapitais = new TreeMap<>();

        //Montando as árvores com as capitais
        treeCapitais.put("RS", "Porto Alegre");
        treeCapitais.put("SC", "Florianólis");
        treeCapitais.put("PR", "Curitiba");
        treeCapitais.put("SP", "São Paulo");
        treeCapitais.put("RJ", "Rio de Janeiro");
        treeCapitais.put("MG", "Belo Horizonte");
        System.out.println("Capitais: " + treeCapitais);

        //Retorna a primeira capital no topo da árvore
        System.out.println("Primeira capital, no topo da árvore: " + treeCapitais.firstKey());

        //Retorna a última capital no final da árvore
        System.out.println("ùltima capital, no final da árvore: " + treeCapitais.lastKey());

        //Retorna a primeira capital abaixo de dada capital
        System.out.println("Capital abaixo de SC, na árvore: " + treeCapitais.lowerKey("SC"));

        //Retorna a primeira capital, acima de dada capital
        System.out.println("Capital acima de SC, na árvore: " + treeCapitais.higherKey("SC"));

        //Exibe as capitais no console
        System.out.println("Capitais: " + treeCapitais);

        //Retorna a primeira capital no topo da árvore
        System.out.println("Capital e cidade, no topo da árvore: " + treeCapitais.firstEntry().getKey() + " - " + treeCapitais.firstEntry().getValue());

        //Retorna a última capital no topo da árvore
        System.out.println("Capital e cidade, no topo da árvore: " + treeCapitais.lastEntry().getKey() + " - " + treeCapitais.lastEntry().getValue());

        //Retorna a primeira capital, abaixo de dada capital
        System.out.println("Capital e cidade, abaixo de SC na árvore: " + treeCapitais.lowerEntry("SC").getKey() + " - " +  treeCapitais.lowerEntry("SC").getValue());

        //Retorna a primeira capital, acima de dada capital
        System.out.println("Capital e cidade, acima de SC na árvore: " + treeCapitais.higherEntry("SC").getKey() + " - " + treeCapitais.higherEntry("SC").getValue());

        //Exibe as capitais no console
        System.out.println("Capitais: " + treeCapitais);

        //Removendo, e mostrando a primeira e última capital do mapa
        Map.Entry<String, String> firstEntry = treeCapitais.pollFirstEntry();
        Map.Entry<String, String> lastEntry = treeCapitais.pollLastEntry();
        System.out.println("Primeira capital e cidade removida do mapa: " + firstEntry.getKey() + " - " + firstEntry.getValue());
        System.out.println("Última capital e cidade removida do mapa: " + lastEntry.getKey() + " - " + lastEntry.getValue());

        //Exibe as capitais no console
        System.out.println("Capitais: " + treeCapitais);

        //Navega em todos as chaves do iterator (while)
        var iterator = treeCapitais.keySet().iterator();
        System.out.println("Itens (while e iterator): ");
        while (iterator.hasNext()) {
            String key = iterator.next();
            System.out.println("    *" + key + " - " + treeCapitais.get(key));
        }

        //Navega em todos as chaves (for e key)
        System.out.println("Itens (for e key):");
        for (var capital : treeCapitais.keySet())
            System.out.println("    *" + capital + " - " + treeCapitais.get(capital));

        //Navega em todos as chaves (for e entry)
        System.out.println("Itens (for e entry):");
        for (Map.Entry<String, String> capital : treeCapitais.entrySet())
            System.out.println("    *" + capital.getKey() + " - " + capital.getValue());

    }
}
