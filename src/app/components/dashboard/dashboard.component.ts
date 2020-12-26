import { Component, OnInit } from '@angular/core';
import { BaseApplicationComponent } from '../base-components/base-application.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseApplicationComponent
implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
  }

}
