import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  printConsole(form:any)
  {
    console.log(form)
    this.router.navigate(['confirmateaccount']);
  }

}
