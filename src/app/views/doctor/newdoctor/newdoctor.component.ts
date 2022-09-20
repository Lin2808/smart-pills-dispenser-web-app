import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewDoctorI } from 'src/app/models/newdoctor.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-newdoctor',
  templateUrl: './newdoctor.component.html',
  styleUrls: ['./newdoctor.component.css']
})
export class NewdoctorComponent implements OnInit {

  title = "Register doctor"
  newDoctorI:NewDoctorI[] = [];

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    specialism: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  @ViewChild('nameElement') nameElement: ElementRef | undefined;
  @ViewChild('specialismElement') specialismElement: ElementRef | undefined;
  @ViewChild('phoneNumberElement') phoneNumberElement: ElementRef | undefined;
  @ViewChild('emailElement') emailElement: ElementRef | undefined;
  @ViewChild('addressElement') addressElement: ElementRef | undefined;


  constructor(private router:Router, private apiService:ApiService) { }



  ngOnInit(): void {
  }



  create()
  {
    this.newDoctorI.push({
      name: this.nameElement?.nativeElement.value,
      specialism: this.specialismElement?.nativeElement.value,
      phoneNumber: this.phoneNumberElement?.nativeElement.value,
      email: this.emailElement?.nativeElement.value,
      direction: this.addressElement?.nativeElement.value,
    })

    this.apiService.registerDoctor(this.newDoctorI).subscribe((data:any) =>{
      console.log(data)
      this.router.navigate(['newmedicaltreatment']);
    })
  }

}
