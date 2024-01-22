import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { ConsumeJsonService } from '../../services/consume-json.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  providers:[ConsumeJsonService],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})

export class EmployeeListComponent implements OnInit {
  jsonData:any;
  dtOptions:DataTables.Settings = {}
  dtTriger:Subject<any> = new Subject<any>();

  constructor(private jsonService: ConsumeJsonService){}

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

}
