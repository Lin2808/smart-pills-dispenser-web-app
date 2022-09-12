import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmateaccount',
  templateUrl: './confirmateaccount.component.html',
  styleUrls: ['./confirmateaccount.component.css']
})
export class ConfirmateaccountComponent implements OnInit {
  constructor() {

  }

  email = localStorage.getItem('emailVerification');

  ngOnInit(): void {
  }

}
