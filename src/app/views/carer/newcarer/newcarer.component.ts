import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-newcarer',
  templateUrl: './newcarer.component.html',
  styleUrls: ['./newcarer.component.css']
})
export class NewcarerComponent implements OnInit {
  newCarer = new FormGroup({
  state : new FormControl('false', Validators.required),
  name : new FormControl('', Validators.required),
  phoneNumber : new FormControl('', Validators.required),
  email : new FormControl('', Validators.required),
  password : new FormControl('', Validators.required),
  urlImage : new FormControl('', Validators.required),
  })

  constructor(private router:Router, private apiService : ApiService) { }

  ngOnInit(): void {
  }

  printConsole(form:any)
  {
    this.apiService.registerCarer(form).subscribe(data =>{
      console.log(data);
    })
    this.router.navigate(['confirmateaccount']);
  }

}
