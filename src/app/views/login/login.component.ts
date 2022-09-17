import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { CarerI } from '../../models/carer.interface';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    //Conecto los componentes html con el login.component
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private apiService: ApiService, private router: Router) {}

  //Capturar valor de un componente específico del html
  carers: CarerI[] = [];
  @ViewChild('emailElement') emailElement: ElementRef | undefined;
  @ViewChild('passwordElement') passwordElement: ElementRef | undefined;
  flat:boolean = false;

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  //Verifica si no hay un usuario autenticado en el sistema
  checkLocalStorage()
  {
    if(localStorage.getItem('email'))
    {
      this.router.navigate(['dashboard']);
    }

  }

  //Método para loguearse
  onLogin(form: any)
  {
    //Hago uso del servicio para listar todos los carer por medio de la petición GET
    this.apiService.loginCarer().subscribe((data) => {
      //Asigno los carer a un arreglo carers para luego recorrerlo y comparar
      this.carers = data;
      for (let carer of data)
      {
        if(this.emailElement?.nativeElement.value == carer.email && this.passwordElement?.nativeElement.value == carer.password && carer.state == true)
        {
          localStorage.setItem("carerId", carer.id.toString());
          localStorage.setItem("email", carer.email);
          this.router.navigate(['dashboard']);
        }
        if(this.emailElement?.nativeElement.value == carer.email && this.passwordElement?.nativeElement.value == carer.password && carer.state == false)
        {
          localStorage.setItem("emailVerification", carer.email);
          this.router.navigate(['confirmateaccount']);
        }
        if(this.emailElement?.nativeElement.value != carer.email || this.passwordElement?.nativeElement.value != carer.password)
        {
          //Bandera para que se active mensaje de contraseña o usuario incorrecto en el login
          this.flat = true;
          console.log('Verifique su usuario o contraseña');
        }
      }
    });
  }
}
