// Angular
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// Models
//import { User } from '../models/lora/user.model';

@Injectable()
export class UserService{
  public url :string;
  constructor(private http: HttpClient) {
    this.url='http://localhost:3800';
  /*  this.http.get(this.url+'/yipi/choferes').subscribe(data=>console.log(data));
    this.http.get(this.url+'/yipi/usuarios').subscribe(data=>console.log(data));
    this.http.get(this.url+'/yipi/user/5bdfc31074918f2f2fd2451a').subscribe(data=>console.log(data));*/
  }
  getAllUsers(): Observable<any>{
    return this.http.get(this.url+'/yipi/usuarios');
  }
  getAllChoferes(): Observable<any>{
    return this.http.get(this.url+'/yipi/choferes');
  }
/*  getAllVehiculos(): Observable<any>{
    return this.http.get(this.url+'/yipi/vehiculos');
  }*/
  getAllServicios(): Observable<any>{
    return this.http.get(this.url+'/yipi/servicios');
  }

}
