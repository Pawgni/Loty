import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/environments/enviroment';
import { Travel } from '../models/travel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {


  baseApiUrl:string=enviroment.baseApiUrl;
  constructor(private http:HttpClient) { }


  getAllTravels():Observable<Travel[]>{
     return this.http.get<Travel[]>(this.baseApiUrl+'/api/travels');
  }


  addTravel(addTravelRequest:Travel):Observable<Travel>{
    return this.http.post<Travel>(this.baseApiUrl + '/api/travels', addTravelRequest);
  }

}
