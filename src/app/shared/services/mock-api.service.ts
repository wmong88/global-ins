import { Injectable } from '@angular/core'
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

import { dashboardData } from 'src/app/shared/mock-data/dashboard.mock'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MockApiServiceInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return of(null).pipe(mergeMap(()=>{

      if(request.url === environment.GET_DASHBOARD_DATA && request.method === 'GET'){
        const httpResponse = new HttpResponse({status: 200, body:dashboardData})
        return of(httpResponse)
      }

      return next.handle(request)   //request doesn't fit any condition above
    }))
    
  }
}

export let mockApiServiceProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockApiServiceInterceptor,
  multi: true
}
