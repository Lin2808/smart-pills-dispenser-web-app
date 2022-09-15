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

  patient : PatientI[] = [];
  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.apiService.getAllPatients().subscribe(data=>{
      console.log(data);
    })
  }

}
