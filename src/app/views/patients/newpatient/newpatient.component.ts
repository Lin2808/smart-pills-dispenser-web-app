import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { NewPatientI  } from '../../../models/newpatient.interface';

@Component({
  selector: 'app-newpatient',
  templateUrl: './newpatient.component.html',
  styleUrls: ['./newpatient.component.css']
})
export class NewpatientComponent implements OnInit {

  newPatientI: NewPatientI[] = [];
  carerId = localStorage.getItem('carerId');


  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required)
  });



  title: string = "Register a new patient";
  constructor(private apiService : ApiService, private router : Router) { }

  @ViewChild('nameElement') nameElement: ElementRef | undefined;
  @ViewChild('genderElement') genderElement: ElementRef | undefined;
  @ViewChild('birthdayElement') birthdayElement: ElementRef | undefined;


  ngOnInit(): void {
  }

  create()
  {
    this.apiService.getCarerId(Number(this.carerId)).subscribe(carer =>{

      this.newPatientI.push({
        name: this.nameElement?.nativeElement.value,
        gender: this.genderElement?.nativeElement.value,
        birthDate: this.birthdayElement?.nativeElement.value,
        carer: carer
      })

      this.apiService.registerPatient(this.newPatientI).subscribe((data:any) =>{
        this.router.navigate(['listpatient']);
      })
    })
  }

}
