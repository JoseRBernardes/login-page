import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { ISignUpForm } from '../../../interfaces/Login/ISignUpForm';


@Component({
  selector: 'app-singUp',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signUp.component.html',
  styleUrl: './signUp.component.scss'
})
export class SignUpComponent {
  signUpForm!: FormGroup<ISignUpForm>;

  constructor(
    private router: Router
    ,private loginService: LoginService
    ,private toastService: ToastrService
  ){
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.signUpForm.value.email, this.signUpForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!")
      ,error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde.")
    });
  }

  navigate(){
    this.router.navigate(["login"]);
  }


}

