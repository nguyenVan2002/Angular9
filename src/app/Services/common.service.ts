import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public age = 20;

  constructor() { }
  public tangtuoi(){
    this.age++;
  }
}
