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
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllMedicalTreatments().subscribe(data=>{
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
