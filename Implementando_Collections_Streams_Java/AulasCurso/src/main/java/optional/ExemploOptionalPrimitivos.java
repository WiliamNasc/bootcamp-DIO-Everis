package optional;

import java.util.OptionalDouble;
import java.util.OptionalInt;
import java.util.OptionalLong;

public class ExemploOptionalPrimitivos {
    public static void main (String[] args) {
        System.out.println("Valor inteiro opcional");
        OptionalInt.of(12).ifPresent(System.out::println);
        /*
            Se colocarmos um valor diferente, do tipo de Optional instânciado, ocorrerá um erro de compilação
        */

        System.out.println("Valor decimal opcional");
        OptionalDouble.of(55.2).ifPresent(System.out::println);

        System.out.println("Valor long opcional");
        OptionalLong.of(23L).ifPresent(System.out::println);
    }
}
