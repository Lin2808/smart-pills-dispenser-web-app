import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalTreatmentI } from 'src/app/models/medicaltreatment.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-listmedicaltreatment',
  templateUrl: './listmedicaltreatment.component.html',
  styleUrls: ['./listmedicaltreatment.component.css']
})
export class ListmedicaltreatmentComponent implements OnInit {

  medicalTreatmentI:MedicalTreatmentI[] = [];
  patientId = localStorage.getItem('patientId');
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getMedicalTreatmentsIdPatient(Number(this.patientId)).subscribe((data:any)=>{
      this.medicalTreatmentI = data;
      console.log(data)
    })
  }

  newDosage(id:any)
  {
    localStorage.setItem("medicalTreatmentId", id);
    console.log(id);
  }

}
