import { FormControl } from "@angular/forms";

export interface ISignUpForm {
    name: FormControl;
    email: FormControl;
    password: FormControl;
    passwordConfirm: FormControl;
}