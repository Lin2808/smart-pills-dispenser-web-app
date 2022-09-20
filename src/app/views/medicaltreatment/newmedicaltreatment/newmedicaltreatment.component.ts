import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DoctorI } from 'src/app/models/doctor.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewMedicalTreatmentI } from 'src/app/models/newmedicaltreatment.interface';
import { PatientI } from 'src/app/models/patient.interface';

@Component({
  selector: 'app-newmedicaltreatment',
  templateUrl: './newmedicaltreatment.component.html',
  styleUrls: ['./newmedicaltreatment.component.css']
})
export class NewmedicaltreatmentComponent implements OnInit {

  title:string = "Register a new medical treatment";
  newMedicalTreatment:NewMedicalTreatmentI[] = [];
  doctor:DoctorI[] = [];
  patient:PatientI[] = [];


  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  create()
  {

  }

}
