import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel.model';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  constructor (private travelService:TravelsService){}

  addTravelRequest: Travel={
    id: 0,
    name: '',
    country: '',
    city: '',
    price: 0,
    imageUrl: '',
    description: '',
    travelTime: ''
  }
  


ngOnInit(): void {
  
}

addTravel(){
 
      console.log(this.addTravelRequest);
    }



}
