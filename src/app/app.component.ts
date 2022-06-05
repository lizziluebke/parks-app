import { Component, Input } from '@angular/core';


// decorator 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book a Campsite';

  parks = [
    {
      name: 'Devils lake'
      , showDelete: true
    }
    ,
    {
      name: 'Govornor Dodge'
      , showDelete: false
    }
    , 
    {
      name: 'Cave Point'
      , showDelete: false
    }
  ];


  addPark = () => {
    this.parks = [
      ...this.parks
      , {
        name: 'park'
        , showDelete: true
      }
    ]
  }; 


  deletePark = (p: any) => {
    this.parks = this.parks.filter(x => x !== p);
  }

  addParks = () => {
    this.parks = [
      ...this.parks
     , {
        name: this.newPark 
        , showDelete: false
      }
    ];

    this.newPark = ''; 
  };
  
  newPark = ''; 




}


