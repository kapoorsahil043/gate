import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resident } from 'src/app/data-model/Resident';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListResidentsComponent implements OnInit {
  @Input('residents') residents: Resident[];
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('edit-handler') editHandler: EventEmitter<any> = new EventEmitter();
  @Output('view-handler') viewHandler: EventEmitter<any> = new EventEmitter();

  isLoaded:boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.isLoaded= true;
  }

  edit(data:Resident){
    this.editHandler.emit({data});
  }

  add(){
    this.addHandler.emit(undefined);
  }

  view(data:Resident){
    this.viewHandler.emit({data});
  }

}
