import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { ConsumeJsonService } from '../../../services/consume-employee-json/consume-json.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { ShareDataService } from '../../../services/share-data-service/share-data.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [DataTablesModule, CommonModule,RouterModule],
  providers:[ConsumeJsonService],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})

export class EmployeeListComponent implements OnInit {
  jsonData:any;
  dtOptions:DataTables.Settings = {}
  dtTriger:Subject<any> = new Subject<any>();

  constructor(private jsonService: ConsumeJsonService, private sendObjctService:ShareDataService,){}

  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers',
    }
    this.getData()
  }
  
  getData():void {
    this.jsonService.getJsonData().subscribe(data => {
      this.jsonData = data;
      this.dtTriger.next(null);
      console.log("Data Json : ", this.jsonData)
    })
  }

  sendEmployeeObjectToEdit(employee:any){
    this.sendObjctService.sendEmployeeObject(employee,'/employee/update-employee');
  }

  sendEmployeeObjectToDetail(employee:any){
    this.sendObjctService.sendEmployeeObject(employee,'/employee/detail');
  }

}
