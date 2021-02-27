package desafio1;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Desafio1 {
    public static void main (String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());

        List<Integer> entrada = new ArrayList<>();
        List<Integer> numerosPares = new ArrayList<>();
        List<Integer> numerosImpares = new ArrayList<>();

        for (var i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            entrada.add(Integer.parseInt(st.nextToken()));
        }

        for (var numero : entrada) {
            if (numero % 2 == 0)
                numerosPares.add(numero);
            else
                numerosImpares.add(numero);
        }

        Collections.sort(numerosPares);
        Collections.sort(numerosImpares);
        Collections.reverse(numerosImpares);

        for (var numero : numerosPares)
            System.out.println(numero);

        for (var numero : numerosImpares)
            System.out.println(numero);

    }
}