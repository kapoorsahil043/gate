import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Society } from 'src/app/data-model/Society';

@Component({
  selector: 'app-society-add',
  templateUrl: './society-add.component.html',
  styleUrls: ['./society-add.component.css']
})
export class SocietyAddComponent implements OnInit {
  @Input('is-view') isView:boolean;
  @Input('society') society:Society;
  
  @Output('add-handler') addHandler: EventEmitter<any> = new EventEmitter();
  @Output('close-handler') closeHandler: EventEmitter<any> = new EventEmitter();  

  constructor() { }

  ngOnInit() {
    console.log('SocietyAddComponent,isView',this.isView);
  }

  add(){
    let temp:Society = this.society;
    this.addHandler.emit(temp);
  }

  close(event?:any){
    this.closeHandler.emit();
  }

}