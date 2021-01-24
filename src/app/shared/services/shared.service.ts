import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private subject = new Subject<any>()

  toggleDrawer(status: boolean) {
      this.subject.next(status)   //true: open | false: close
  }

  getDrawerStatus(): Observable<any> {
      return this.subject.asObservable()
  }
}
