import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { PatientI } from '../../../models/patient.interface';
import { CarerI } from 'src/app/models/carer.interface';

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {

  patientI!: PatientI;
  carerI!: CarerI;
  carerId = localStorage.getItem('carerId');

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });



  title: string = "Register patient";
  constructor(private apiService : ApiService, private router : Router, private activatedRoute : ActivatedRoute, private formBuilder : FormBuilder) { }

  @ViewChild('nameElement') nameElement: ElementRef | undefined;
  @ViewChild('genderElement') genderElement: ElementRef | undefined;
  @ViewChild('birthdayElement') birthdayElement: ElementRef | undefined;


  ngOnInit(): void {
  }

  create()
  {
    this.apiService.getCarerId(Number(this.carerId)).subscribe(carer =>{
      //console.log(this.dataPatient(carer.state, carer.registrationDate, carer.name, carer.phoneNumber, carer.email, carer.password, carer.verificationCode, carer.urlImage));
      this.apiService.registerPatient(this.dataPatient(carer.state, carer.registrationDate, carer.name, carer.phoneNumber, carer.email, carer.password, carer.verificationCode, carer.urlImage));
    })
  }

dataPatient(carerState:boolean, registrationDate:string, carerName:string, phoneNumber:string, email:string, password:string, verificationCode:string, urlImage:string)
{
  return {
    name: this.nameElement?.nativeElement.value,
    gender: this.genderElement?.nativeElement.value,
    birthday: this.birthdayElement?.nativeElement.value,
    carer: {
      id: this.carerId,
      state: carerState,
      registrationDate: registrationDate,
      name: carerName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      verificationCode: verificationCode,
      urlImage: urlImage

    }
  }
}

}
