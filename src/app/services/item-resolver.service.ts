import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Item } from '../models/item';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService {

  constructor(private itemService: ItemService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Item> {

    const { id } = route.params
    return this.itemService.getById(id)
  }
}
