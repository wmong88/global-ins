import { Component, OnInit } from '@angular/core'
import { SharedService } from 'src/app/shared/services/shared.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  drawerStatus:boolean = false

  constructor(private sharedSvc: SharedService) { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    this.sharedSvc.toggleDrawer(this.drawerStatus = !this.drawerStatus) 
  }

}
