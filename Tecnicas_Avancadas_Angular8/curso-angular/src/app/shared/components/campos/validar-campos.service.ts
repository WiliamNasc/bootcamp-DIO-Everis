import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarCamposService {

  constructor() { }

  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) {
      return true;
    }
    return false;
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }
}

/* Anotações

- Validação hasError:
Retorna false, ou o nome do erro fornecido, por parâmetro

- Validação hasErrorValidar:
(control.dirty || control.touched) && this.hasError(control, errorName)
Verifica se o campo está sujo (control.dirty), ou se ele foi tocado (control.touched)
, e se o erro foi disparado (hasError)

*/