import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { DosageI } from '../../../models/dosage.interface';

@Component({
  selector: 'app-listdosage',
  templateUrl: './listdosage.component.html',
  styleUrls: ['./listdosage.component.css']
})
export class ListdosageComponent implements OnInit {

  medicalTreatmentId = localStorage.getItem('medicalTreatmentId');
  dosages: DosageI[] = [];
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getDosageIdMedicalTreatments(Number(this.medicalTreatmentId)).subscribe((data:any)=>{
      this.dosages = data;
      console.log(data)
    })

  }

}
