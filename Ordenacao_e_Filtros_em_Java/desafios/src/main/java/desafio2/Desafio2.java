import java.util.*;

public class TabuleiroSecreto {

    public static void main(String[] args) {

        List<String> entrada = new ArrayList<String>();
        Scanner scanner = new Scanner(System.in);

        while(scanner.hasNext())
            entrada.add(scanner.nextLine());

        Iterator<String> iterator = entrada.iterator();

        String linha = iterator.next();

        Integer tamanhoTabuleiro = Integer.parseInt(linha.split(" ")[0]);
        Integer qtdeOperacoes = Integer.parseInt(linha.split(" ")[1]);

        List<Map<String, Integer>> operacoes = lerOperacoes(qtdeOperacoes, iterator);

        Integer tabuleiro[][] = criarTabuleiro(tamanhoTabuleiro);

        for(Map<String, Integer> operacao : operacoes) {
            if(operacao.get("tipoOp") == 1)
                tabuleiro = executarPrimeiraAcao(operacao, tabuleiro, tamanhoTabuleiro);
            else if(operacao.get("tipoOp") == 2)
                tabuleiro = executarSegundaAcao(operacao, tabuleiro, tamanhoTabuleiro);
            else if(operacao.get("tipoOp") == 3) {
                Map<Integer, Integer> numerosRetidos = lerRepeticoesLinha(operacao, tabuleiro, tamanhoTabuleiro);
                Integer numeroMaisRepetido = avaliaNumeroComMaiorRepeticao(numerosRetidos);
                System.out.println(numeroMaisRepetido);
            } else if(operacao.get("tipoOp") == 4) {
                Map<Integer, Integer> repeticoesNumero = lerRepeticoesColuna(operacao, tabuleiro, tamanhoTabuleiro);
                Integer maiorNumeroComMaiorRepeticao = avaliaNumeroComMaiorRepeticao(repeticoesNumero);
                System.out.println(maiorNumeroComMaiorRepeticao);
            }
        }
    }

    private static List<Map<String, Integer>> lerOperacoes(Integer qtdeOperacoes, Iterator<String> iterator) {
        List<Map<String, Integer>> operacoes = new ArrayList<Map<String, Integer>>();

        for(var i = 0; i < qtdeOperacoes; i++) {
            String strOperacao = iterator.next();
            Integer tipoOperacao = Integer.parseInt(strOperacao.split(" ")[0]);

            if(tipoOperacao == 1 || tipoOperacao == 2) {
                Integer linhaColuna = Integer.parseInt(strOperacao.split(" ")[1]);
                Integer valorR = Integer.parseInt(strOperacao.split(" ")[2]);
                Map<String, Integer> operacao = new HashMap<String, Integer>();

                operacao.put("tipoOp", tipoOperacao);
                operacao.put("numLinColX", linhaColuna);
                operacao.put("valorR", valorR);
                operacoes.add(operacao);
            } else if(tipoOperacao == 3 || tipoOperacao == 4) {
                Integer linhaColuna = Integer.parseInt(strOperacao.split(" ")[1]);
                Map<String, Integer> operacao = new HashMap<String, Integer>();

                operacao.put("tipoOp", tipoOperacao);
                operacao.put("numLinColX", linhaColuna);
                operacoes.add(operacao);
            }
        }
        return operacoes;
    }

    private static Integer[][] criarTabuleiro(int tamanhoTabuleiro) {
        Integer tabuleiro[][] = new Integer[tamanhoTabuleiro][tamanhoTabuleiro];

        for(var i = 0; i < tamanhoTabuleiro; i++) {
            for(int j = 0; j < tamanhoTabuleiro; j++)
                tabuleiro[i][j] = 0;
        }
        return tabuleiro;
    }

    private static void imprimirTabuleiro(Integer[][] tabuleiro, int tamanhoTabuleiro) {
        for(var i = 0; i < tamanhoTabuleiro; i++) {
            for(var j = 0; j < tamanhoTabuleiro; j++)
                System.out.print(tabuleiro[i][j] + " ");
            System.out.println();
        }
    }

    private static Integer[][] executarPrimeiraAcao(Map<String, Integer> operacao, Integer[][] tabuleiro, int tamanhoTabuleiro) {
        for(var i = 0; i < tamanhoTabuleiro; i++) {
            var linha = operacao.get("numLinColX") - 1;
            tabuleiro[linha][i] = operacao.get("valorR");
        }
        return tabuleiro;
    }

    private static Integer[][] executarSegundaAcao(Map<String, Integer> operacao, Integer[][] tabuleiro, int tamanhoTabuleiro) {
        for(var i = 0; i < tamanhoTabuleiro; i++) {
            var coluna = operacao.get("numLinColX") - 1;
            tabuleiro[i][coluna] = operacao.get("valorR");
        }
        return tabuleiro;
    }

    private static Map<Integer, Integer> lerRepeticoesLinha(Map<String, Integer> operacao, Integer[][] tabuleiro, Integer tamanhoTabuleiro) {
        Map<Integer, Integer> repeticoesNumero = new HashMap<Integer, Integer>();
        int linha = operacao.get("numLinColX") - 1;

        for(var i = 0; i < tamanhoTabuleiro; i++) {
            Integer pivo = tabuleiro[linha][i];

            if(repeticoesNumero.containsKey(pivo)) {
                Integer qt = repeticoesNumero.get(pivo);
                qt++;
                repeticoesNumero.put(pivo, qt);
            }else
                repeticoesNumero.put(pivo, 1);
        }
        return repeticoesNumero;
    }

    private static Map<Integer, Integer> lerRepeticoesColuna(Map<String, Integer> operacao, Integer[][] tabuleiro, Integer tamanhoTabuleiro) {
        Map<Integer, Integer> repeticoesNumero = new HashMap<Integer, Integer>();
        int colunaX = operacao.get("numLinColX") - 1;

        for(var i = 0; i < tamanhoTabuleiro; i++) {
            Integer pivo = tabuleiro[i][colunaX];

            if(repeticoesNumero.containsKey(pivo)) {
                Integer qt = repeticoesNumero.get(pivo);
                qt++;
                repeticoesNumero.put(pivo, qt);
            } else
                repeticoesNumero.put(pivo, 1);
        }
        return repeticoesNumero;
    }

    public static Integer avaliaNumeroComMaiorRepeticao(Map<Integer, Integer> repeticoesNumero) {
        List<Integer> maioresRepeticoes = new ArrayList<Integer>();
        Integer maiorRepeticao = Collections.max (repeticoesNumero.values());
        List<Integer> chaves = new ArrayList<Integer>(repeticoesNumero.keySet());

        for(var chave : chaves) {
            Integer valorRepeticao = repeticoesNumero.get(chave);

            if(valorRepeticao >= maiorRepeticao)
                maioresRepeticoes.add(chave);
        }
        Integer numeroComMaiorRepeticao = Collections.max(maioresRepeticoes);
        return numeroComMaiorRepeticao;
    }

}