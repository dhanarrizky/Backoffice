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

  modalShow:boolean =  false;
  deleteConfirm:boolean = false;
  modalNavigate:string = '';
  employeeObj:any;
  confirmHead:string = '';
  confirmMessage:string = '';

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

  sendEmployeeObject(employee:any , navigate:string){
      this.sendObjctService.sendEmployeeObject(employee,navigate);
  }

  // paginate_button current(pagination)
  // class="DataTables_Table_0_filter" input(search)
  // class="dataTables_length" select(search)

  goToDetail(employee:any){
    this.sendEmployeeObject(employee, '/employee/detail')
  }
  
  showModalEdit(employee:any){
    this.modalShow = true
    this.deleteConfirm = false
    this.modalNavigate = '/employee/update-employee'
    this.employeeObj = employee
    this.confirmHead = 'Edit'
    this.confirmMessage = "are you sure you want to edit "+ employee.username
  }
  
  showModalDelete(employee:any){
    this.modalShow = true
    this.deleteConfirm = true
    // this.modalNavigate = '/employee/detail'
    this.employeeObj = employee
    this.confirmHead = 'Delete'
    this.confirmMessage = "are you sure you want to delete "+ employee.username
  }
  
  deleteOk(username:string){
    console.log("data "+ username +"has been deleted")
    this.closeModal();
  }
  
  closeModal(){
    this.modalShow = false;
  }

}