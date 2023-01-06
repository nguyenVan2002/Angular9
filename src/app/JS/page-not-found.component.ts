import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  // scale: number =  0
  // transform: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  // zoomOut() {
  //   this.scale -= .1;
  //   this.transform = {
  //       ...this.transform,
  //       scale: this.scale
  //   };
  // }

  // zoomIn() {
  //   this.scale += .1;
  //   this.transform = {
  //       ...this.transform,
  //       scale: this.scale
  //   };
  // }

  zoom:boolean=false;
  zoomOut(){
    this.zoom=false;
  }
  zoomIn(){
    
    this.zoom=true;
  }
  getheight(){
    if(this.zoom==true){
      return '500px';
      //return your desiderd value in pixel or in percentage
    }
    else{
      return '200px';
      }
  }

}





