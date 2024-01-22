import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumeJsonService {

  private employeeData = '../../assets/data-access/employee.json';

  constructor(private json:HttpClient) { }

  getJsonData():Observable<any>{
    return this.json.get(this.employeeData)
  }
}
