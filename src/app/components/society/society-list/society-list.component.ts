import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Society } from 'src/app/data-model/Society';
import { SocietyService } from 'src/app/services/society.service';

@Component({
  selector: 'app-society-list',
  templateUrl: './society-list.component.html',
  styleUrls: ['./society-list.component.css']
})
export class SocietyListComponent implements OnInit {
  
  isLoaded:boolean = false;
  @Input('societies') societies:Society[];
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('view-handler') viewHandler: EventEmitter<any> = new EventEmitter();

  constructor(private societyService:SocietyService) { }

  ngOnInit() {
    this.isLoaded= true;
  }

  add(){
    this.addHandler.emit(undefined);
  }

  view(data:Society){
    this.viewHandler.emit({data});
  }

}