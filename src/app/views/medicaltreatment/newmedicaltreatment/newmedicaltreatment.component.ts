import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DoctorI } from 'src/app/models/doctor.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewMedicalTreatmentI } from 'src/app/models/newmedicaltreatment.interface';
import { PatientI } from 'src/app/models/patient.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-newmedicaltreatment',
  templateUrl: './newmedicaltreatment.component.html',
  styleUrls: ['./newmedicaltreatment.component.css']
})
export class NewmedicaltreatmentComponent implements OnInit {

  title:string = "Register a new medical treatment";
  newMedicalTreatment:NewMedicalTreatmentI[] = [];
  doctors:DoctorI[] = [];
  patient:PatientI[] = [];
  patientId = localStorage.getItem('patientId');
  doctorId = localStorage.getItem('doctorId');


  formGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    doctor: new FormControl('', Validators.required)
  });

  constructor(private router:Router, private apiService:ApiService) { }

  @ViewChild('descriptionElement') descriptionElement: ElementRef | undefined;
  @ViewChild('startDateElement') startDateElement: ElementRef | undefined;
  @ViewChild('doctorElement') doctorElement: ElementRef | undefined;

  ngOnInit(): void {
    this.apiService.getAllDoctor().subscribe(data=>{
      this.doctors = data;
      console.log(data)
    })
  }
  doctorName:any;

  getDoctorId(id:any, name:any)
  {
    localStorage.setItem("doctorId", id);
    console.log(id);
    this.doctorName = name;
  }

  create()
  {

  }

}
