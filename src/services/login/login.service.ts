import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseModel } from '../../model/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(name: string, password: string){
    return this.httpClient.post<LoginResponseModel>("/login", {name, password}).pipe(tap((response)=> { 
      sessionStorage.setItem("auth-Token", response.token)
      sessionStorage.setItem("userName", response.name)
      })
    )
  }
}
