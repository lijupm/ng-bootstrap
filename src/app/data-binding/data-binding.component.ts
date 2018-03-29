import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  userName = '';

  btnName = 'Reset User Name';

  constructor() { }

  ngOnInit() {
  }

  onResetUserName() {
    this.userName = '';
  }

  isEmptyUserName() {
    if (this.userName === '') {
      return true;
    }

    return false;
  }
}
