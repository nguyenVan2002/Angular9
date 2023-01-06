import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public input1: any = 1
 public input2: any = 2
 public result: any;



  constructor() { 
    
  }

  ngOnInit(): void {}

  sum(){
    this.result = this.input1 + this.input2
  }
    
}
