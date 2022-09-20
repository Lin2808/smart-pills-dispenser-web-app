import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CarerI } from 'src/app/models/carer.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-confirmateaccount',
  templateUrl: './confirmateaccount.component.html',
  styleUrls: ['./confirmateaccount.component.css']
})
export class ConfirmateaccountComponent implements OnInit {
  constructor(private router:Router, private apiService:ApiService) {

  }

  carerI:CarerI[] = [];
  email = localStorage.getItem('emailVerification');
  @ViewChild('code') code: ElementRef | undefined;

  ngOnInit(): void {

  }

  verifyCode()
  {
    this.apiService.loginCarer().subscribe((data)=>{

      for (let carer of data)
      {
        if(carer.email == this.email)
        {
          if(carer.verificationCode == this.code?.nativeElement.value)
          {
            this.carerI.push({
              id: carer.id,
              state: true,
              registrationDate: carer.registrationDate,
              name: carer.name,
              phoneNumber: carer.phoneNumber,
              email: carer.email,
              password: carer.password,
              verificationCode: carer.verificationCode,
              urlImage: carer.urlImage
            })
            console.log(this.carerI);
            this.apiService.updateCarerState(this.carerI, carer.id).subscribe((update:any)=>{
              localStorage.setItem("carerId", carer.id.toString());
              localStorage.setItem("email", carer.email);
              this.router.navigate(['dashboard']);
            })
          }

        }
      }
    })
  }

}
