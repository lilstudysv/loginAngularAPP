import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage : TokenStorageService) { }

  intercept(req, next){

    if(this.tokenStorage.getToken()!=null){
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization :  this.tokenStorage.getToken()
        }
     })
     return next.handle(tokenizedReq);
    }
    else{
      return next.handle(req);
    }
   
  }
}
