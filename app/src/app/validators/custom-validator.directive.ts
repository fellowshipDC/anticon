import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static vaildEmail(c: FormControl): ValidationErrors {
        const email = c.value;
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        var isValid = true;
        const message = {
            'vaildEmail': {
                'message': 'Debe ser un correo válido.'
            }
        };
        if (reg.test(email)){
            isValid = true;
        }
        else{
            isValid = false;
        }
        return isValid ? null : message;
    }
    static age(c: FormControl): ValidationErrors { 
       const num = Number(c.value);
       const isValid = !isNaN(num) && num >= 15 && num <= 60;
       const message = {
         'age': {
           'message': 'La edad debe ser un número válido entre 15 and 60' // Will changes the error defined in errors helper.
         }
       };
       return isValid ? null : message;
    }
}