import { FormControl } from "@angular/forms";

export function prenomValidator(control: FormControl) {
    const firstChar = control.value ?? "";
    if (firstChar[0] >= 'A' && firstChar[0] <= 'Z') {
      return null;
    } else {
      return {
        message: "Le prénom doit commencer par une lettre en majuscule"
      }
    }
  }
  