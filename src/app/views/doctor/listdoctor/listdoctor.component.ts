import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorI } from 'src/app/models/doctor.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-listdoctor',
  templateUrl: './listdoctor.component.html',
  styleUrls: ['./listdoctor.component.css']
})
export class ListdoctorComponent implements OnInit {

  doctors:DoctorI[] = [];
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllDoctor().subscribe(data=>{
      this.doctors = data;
      console.log(data)
    })
  }

  captureIdDoctor(id:any)
  {
    localStorage.setItem("doctorId", id);
    console.log(id);
  }

}
