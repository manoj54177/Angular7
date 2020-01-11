import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private httpService:HttpClient) { }

  getCustomerList(){    
      return this.httpService.get(environment.apiURL+'/Customer').toPromise();
    }
  }

