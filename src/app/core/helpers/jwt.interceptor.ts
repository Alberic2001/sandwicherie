import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUserToken = this.authenticationService.getToken();
    if (currentUserToken) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUserToken}`
            }
        });
    }

    return next.handle(request);
}
}
