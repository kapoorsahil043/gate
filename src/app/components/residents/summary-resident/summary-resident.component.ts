import { Component, OnInit } from '@angular/core';
import { ResidentService } from 'src/app/services/resident.service';

@Component({
  selector: 'app-summary-resident',
  templateUrl: './summary-resident.component.html',
  styleUrls: ['./summary-resident.component.css']
})
export class SummaryResidentComponent implements OnInit {

  isLoaded:boolean = false;
  residentSummary = {
    owners: 0,
    rents:0,
    emptyFlats:0
  }
  constructor(private residentService:ResidentService) { }

  ngOnInit() {
    this.isLoaded = true;
    this.residentSummary = {
      owners: this.residentService.residents.length,
      rents: this.residentService.residents.length,
      emptyFlats: this.residentService.residents.length
    };
  }

}
