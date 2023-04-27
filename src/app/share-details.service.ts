import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDetailsService {

  public value = new Subject<string>();

  getObservable(): Subject<string>{
    return this.value;
  }

  setValue(val:string){
    this.value.next(val);
  }
}
