import { Component, OnInit } from "@angular/core";
import { Resident } from 'src/app/data-model/Resident';
import { ResidentService } from "src/app/services/resident.service";
import { ToastrService } from 'src/app/services/toastr.service';
import { callbackify } from 'util';

@Component({
  selector: "app-residents",
  templateUrl: "./residents.component.html",
  styleUrls: ["./residents.component.css"],
})

export class ResidentsComponent implements OnInit {
  step: number = 1;
  isEdit: boolean = false;
  isView: boolean = false;

  residents: Resident[] = [];
  resident: Resident = new Resident();
  

  constructor(private residentService: ResidentService,private toastrService:ToastrService) {}

  ngOnInit() {
    let successCallback:any = function(data:any){
      console.log('successCallback',data);
    }
    this.loadResidents(successCallback.bind(this))

    this.loadSummary();
  }
  
  loadSummary() {
    this.residentService.getResidentSummary();
  }

  loadResidents(successCallback: (result: any) => void) {
    this.residentService.getResidents().subscribe((residents:Resident[]) =>{
      this.residents = residents
      successCallback(residents);
    } );
  }

  add(data?:Resident){
    console.log('log::add',data);
    if(data){
      this.step = 1; // render list sreen
      if(this.isEdit){
        this.residentService.updateResident(data); // update record
        this.toastrService.success('Resident Updated');
      }else{
        this.residentService.saveResident(data); // add new record
        this.toastrService.success('Resident Saved');
      }
    }else{
      this.step = 2; // render add sreen
    }
  }

  edit(obj:any){
    console.log('log::edit',obj);
    this.resident = obj.data;
    this.isEdit = true;
    this.step = 2; // render add sreen
  }

  view(obj:any){
    console.log('log::view',obj);
    this.resident = obj.data;
    this.step = 2; // render add sreen
    this.isView = true;
  }

  close(event?:any){
    this.step = 1; // render list sreen
    this.isView = false;
  }
}
