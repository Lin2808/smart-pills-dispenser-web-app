import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service'
import { PatientListI } from '../../../models/patientlist.interface';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent implements OnInit {

  patients : PatientListI[] = [];
  carerId = localStorage.getItem('carerId');
  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.apiService.getPatientIdCarer(Number(this.carerId)).subscribe((data:any)=>{
      this.patients = data;
      console.log(data);
    })
  }


  newMedicalTreatment(id:any)
  {
    localStorage.setItem("patientId", id);
    console.log(id);
  }

}
