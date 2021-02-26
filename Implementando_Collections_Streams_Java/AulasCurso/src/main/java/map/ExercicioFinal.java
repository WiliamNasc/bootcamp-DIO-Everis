package map;

import java.util.HashMap;
import java.util.Map;

public class ExercicioFinal {

    public static void main(String[] args) {
        //Crie um Map
        Map<String, String> estadosBrasileiros = new HashMap<>();

        //adicione os 26 estados brasileiros no map, onde a sigla será a chave, e o nome do estado é o valor
        estadosBrasileiros.put("AC", "Acre");
        estadosBrasileiros.put("AL", "Alagoas");
        estadosBrasileiros.put("AP", "Amapá");
        estadosBrasileiros.put("AM", "Amazonas");
        estadosBrasileiros.put("BA", "Bahia");
        estadosBrasileiros.put("CE", "Ceará");
        estadosBrasileiros.put("ES", "Espirito Santo");
        estadosBrasileiros.put("GO", "Goiás");
        estadosBrasileiros.put("MA", "Maranhão");
        estadosBrasileiros.put("MT", "Mato Grosso");
        estadosBrasileiros.put("MS", "Mato Grosso do Sul");
        estadosBrasileiros.put("MG", "Minas Gerais");
        estadosBrasileiros.put("PA", "Pará");
        estadosBrasileiros.put("PB", "Paraiba");
        estadosBrasileiros.put("PR", "Paraná");
        estadosBrasileiros.put("PE" , "Pernambuco");
        estadosBrasileiros.put("PI", "Piaui");
        estadosBrasileiros.put("RJ", "Rio de Janeiro");
        estadosBrasileiros.put("RN", "Rio Grande do Norte");
        estadosBrasileiros.put("RS", "Rio Grande do Sul");
        estadosBrasileiros.put("RO", "Rondônia");
        estadosBrasileiros.put("RR", "Roraima");
        estadosBrasileiros.put("SC", "Santa Catarina");
        estadosBrasileiros.put("SP", "São Paulo");
        estadosBrasileiros.put("SE", "Sergipe");
        estadosBrasileiros.put("TO", "Tocantis");
        System.out.println("Estados brasileiros: " + estadosBrasileiros);

        //remova o estado de minas gerais
        estadosBrasileiros.remove("MG");
        System.out.println("Estados brasileiros (após a remoção): " + estadosBrasileiros);

        //adicione o distrito federal
        estadosBrasileiros.put("DF", "Distrito Federal");
        System.out.println("Estados brasileiros (após a adição): " + estadosBrasileiros);

        //verifique o tamanho do mapa
        System.out.println("Tamanho do mapa: " + estadosBrasileiros.size());

        //remova o estado de mato grosso do sul usando o nome
        estadosBrasileiros.remove("MS", "Mato Grosso do Sul");
        System.out.println("Estados brasileiros (após a remoção): " + estadosBrasileiros);

        //navegue em todos os registros do map, mostrando no console o seuinte formato NOME (SIGLA)
        System.out.println("Estados Brasileiros (for e entry): ");
        for (Map.Entry<String, String> estadoBrasileiro : estadosBrasileiros.entrySet())
            System.out.println("    *" + estadoBrasileiro.getValue() + " - " + estadoBrasileiro.getKey());

        //verifique se o estado de santa catarina existe no map buscando por sua sigla (SC)
        System.out.println("Existe o estado de Santa Catarina, no mapa: " + estadosBrasileiros.containsKey("SC"));

        //verifique se o estado de maranhão existe no map buscando por seu nome
        System.out.println("Existe o estado de Maranhão, no mapa: " + estadosBrasileiros.containsValue("Maranhão"));
    }

}
