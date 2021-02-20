import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedInUser$ = new BehaviorSubject({ id: 'u101', name: 'Shraga', itemCount: 0 })
  public loggedInUser$ = this._loggedInUser$.asObservable()
  private _isLoggedIn = true;
  constructor() { }

  checkLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._isLoggedIn);
      }, 1000);
    })
  }

  saveUser(user) {
    this._loggedInUser$.next(user)
  }
}
