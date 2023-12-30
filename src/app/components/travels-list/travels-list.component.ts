import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travel.model';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit{


  travels:Travel[]=[];

  constructor(private travelService:TravelsService){}



  ngOnInit(): void {
    this.travelService.getAllTravels()
    .subscribe({
      next:(travels)=>{
        this.travels=travels;
      },
        error:(response)=>{
          console.log(response);
        }
 
      })
    
  }


}
