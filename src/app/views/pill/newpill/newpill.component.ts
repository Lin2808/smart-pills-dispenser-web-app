import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { NewPillI } from 'src/app/models/newpill.interface';

@Component({
  selector: 'app-newpill',
  templateUrl: './newpill.component.html',
  styleUrls: ['./newpill.component.css']
})
export class NewpillComponent implements OnInit {

  title = "Register Pill";
  newPill:NewPillI[] = [];

  formGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    urlImage: new FormControl('', Validators.required)
  });

  @ViewChild('nameElement') nameElement: ElementRef | undefined;
  @ViewChild('descriptionElement') descriptionElement: ElementRef | undefined;
  @ViewChild('urlImageElement') urlImageElement: ElementRef | undefined;


  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
  }

  create()
  {
    this.newPill.push({
      name: this.nameElement?.nativeElement.value,
      description: this.descriptionElement?.nativeElement.value,
      urlImage: this.urlImageElement?.nativeElement.value
    })

    this.apiService.registerPill(this.newPill).subscribe((data:any) =>{
      console.log(data)
      this.router.navigate(['newdosage']);
    })
  }

}
