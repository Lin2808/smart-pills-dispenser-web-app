import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewCarerI } from 'src/app/models/newcarer.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-newcarer',
  templateUrl: './newcarer.component.html',
  styleUrls: ['./newcarer.component.css']
})
export class NewcarerComponent implements OnInit {

  formGroup = new FormGroup({
  name : new FormControl('', Validators.required),
  email : new FormControl('', Validators.required),
  password : new FormControl('', Validators.required),
  phoneNumber : new FormControl('', Validators.required),
  urlImage : new FormControl('', Validators.required),
  })

  @ViewChild('nameElement') nameElement: ElementRef | undefined;
  @ViewChild('emailElement') emailElement: ElementRef | undefined;
  @ViewChild('passwordElement') passwordElement: ElementRef | undefined;
  @ViewChild('phoneNumberElement') phoneNumberElement: ElementRef | undefined;
  @ViewChild('urlImageElement') urlImageElement: ElementRef | undefined;
  newCarerI: NewCarerI[] = [];

  constructor(private router:Router, private apiService : ApiService) { }

  ngOnInit(): void {
  }

  create()
  {
      this.newCarerI.push({
        name: this.nameElement?.nativeElement.value,
        phoneNumber: this.phoneNumberElement?.nativeElement.value,
        email: this.emailElement?.nativeElement.value,
        password: this.passwordElement?.nativeElement.value,
        urlImage: this.urlImageElement?.nativeElement.value,
      })

      this.apiService.registerCarer(this.newCarerI).subscribe((data:any) =>{
        localStorage.setItem("emailVerification", this.emailElement?.nativeElement.value);
        console.log(data)
        this.router.navigate(['confirmateaccount']);
      })
  }

}
