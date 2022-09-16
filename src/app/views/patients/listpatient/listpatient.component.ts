import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service'
import { PatientI } from '../../../models/patient.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent implements OnInit {

  patients : PatientI[] = [];
  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.apiService.getAllPatients().subscribe(data=>{
      this.patients = data;
      console.log(data);
    })
  }

  menuPatient(id:any)
  {
    localStorage.setItem("idPatient", id);
    this.router.navigate(['editpatient']);
  }
  newPatientRedirect()
  {
    this.router.navigate(['newpatient']);
  }

}
