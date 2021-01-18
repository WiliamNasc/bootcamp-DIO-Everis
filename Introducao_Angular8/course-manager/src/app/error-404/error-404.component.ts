import { Component } from "@angular/core";

@Component ({
    templateUrl: './error-404.component.html'
})

export class Error404{

}

/** Anotações
- Neste componente, não iremos utilizar
o 'selector', pois não iremos reutilizá-lo
em outro componente, por exemplo, o componente
'star' utilizamos um selector, pois estamos usando ele
em outro componente (no caso, o course-list-component)
 */