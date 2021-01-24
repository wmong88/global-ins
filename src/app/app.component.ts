import { Component, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { SharedService } from 'src/app/shared/services/shared.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title:string = 'global-ins'
  drawerStatus:boolean = false
  
  messages: any[] = []
  subscription: Subscription

  constructor(private sharedSvc: SharedService) {
    this.subscription = this.sharedSvc.getDrawerStatus().subscribe(status => {
      this.drawerStatus = status
    });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe()
  }
}

