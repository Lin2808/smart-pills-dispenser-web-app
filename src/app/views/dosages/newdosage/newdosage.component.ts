import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PillI } from 'src/app/models/pill.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-newdosage',
  templateUrl: './newdosage.component.html',
  styleUrls: ['./newdosage.component.css']
})
export class NewdosageComponent implements OnInit {


  formGroup = new FormGroup({
    prescription: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    selectDateElement: new FormControl('', Validators.required),
    selectHourElement: new FormControl('', Validators.required),
    pill: new FormControl('', Validators.required),
  });

  pills:PillI[] = [];
  title:string = "Register dosage";
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getAllPills().subscribe((data) => {
      this.pills = data;
      console.log(data);
    });
  }
  pillName:any;

  getPillId(id: any, name: any) {
    localStorage.setItem('pillId', id);
    console.log(id);
    this.pillName = name;
  }

  create()
  {

  }

}
