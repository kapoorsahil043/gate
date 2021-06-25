import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resident } from 'src/app/data-model/Resident';

@Component({
  selector: 'app-resident-add',
  templateUrl: './resident-add.component.html',
  styleUrls: ['./resident-add.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddResidentComponent implements OnInit {
  @Input('resident') resident: Resident;
  @Input('is-view') isView:boolean;
  
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('close-handler') closeHandler: EventEmitter<any> = new EventEmitter();  

  constructor() { }

  ngOnInit() {
    console.log('AddResidentComponent,isView',this.isView);
  }

  add(){
    let temp:Resident = this.resident;
    this.addHandler.emit(temp);
  }

  close(event?:any){
    this.closeHandler.emit();
  }

}
