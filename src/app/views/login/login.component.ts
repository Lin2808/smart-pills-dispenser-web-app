import { Component, ElementRef, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { CarerI } from '../../models/carer.interface';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    }
  )


  constructor(private apiService:ApiService)
  {

  }

  carers:CarerI[] = [];
  @ViewChild('emailElement') emailElement:ElementRef | undefined;
  @ViewChild('passwordElement') passwordElement:ElementRef | undefined;

  ngOnInit(): void
  {

  }

  onLogin(form:any)
  {
    this.apiService.loginCarer().subscribe(data =>
      {
        this.carers = data;
        for (let carer of data)
        {
          if(this.emailElement?.nativeElement.value == carer.email && this.passwordElement?.nativeElement.value == carer.password)
          {
            console.log("si es normal");
          }
        }
      });
  }

}
