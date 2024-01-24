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
      columns: [
        { orderable: true, searchable: false }, // No
        { orderable: true, searchable: true }, // username   
        { orderable: true, searchable: true }, // fisrtname
        { orderable: true, searchable: true }, // lastname
        { orderable: true, searchable: true }, // email
        { orderable: true, searchable: false }, // birthdate
        { orderable: true, searchable: true }, // basicSallery
        { orderable: true, searchable: true }, // status
        {orderable: false, searchable:false} // action
      ]
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


// Gunakan mixin dalam komponen Angular:
// typescript
// Copy code
// // your-component.component.ts

// // Import the required Angular modules and services

// @Component({
//   // Component metadata
//   styleUrls: ['./your-component.styles.scss']
// })
// export class YourComponent implements OnInit {
//   // Your component properties and methods

//   ngOnInit(): void {
//     // Call the mixin when needed
//     this.showModal();
//   }

//   showModal(): void {
//     @include modal-open;
//   }

//   hideModal(): void {
//     @include modal-close;
//   }
// }