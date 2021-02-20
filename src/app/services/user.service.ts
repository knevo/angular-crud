import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loggedInUser$ = new BehaviorSubject({ id: 'u101', name: 'Shraga', cart: [] })
  public loggedInUser$ = this._loggedInUser$.asObservable()

  constructor() { }

  saveUser(user) {
    this._loggedInUser$.next(user)
  }
  addToCart(item: Item) {
    const user = this._loggedInUser$.getValue()
    user.cart.push(item)
    this._loggedInUser$.next(user)
  }
}
