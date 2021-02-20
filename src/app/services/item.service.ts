import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { storageService } from './async-storage.service'

const ENTITY = 'item'
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {
    const items = JSON.parse(localStorage.getItem(ENTITY) || 'null');
    if (!items || items.length === 0) {
      localStorage.setItem(ENTITY, JSON.stringify(this.itemsDB))
    }
  }

  private initialFilter = { term: '', minPrice: null, maxPrice: null }
  private _filterBy$ = new BehaviorSubject(this.initialFilter)
  public filterBy$ = this._filterBy$.asObservable()

  private _items$ = new BehaviorSubject(null);
  public items$ = this._items$.asObservable()

  public async query() {
    const filterBy = this._filterBy$.getValue()
    const items = await storageService.query(ENTITY, 800) as Item[]
    const filteredItems = this._filterItems(items, filterBy).map((item) => ({ ...item, inStock: Math.random() > 0.5 }))
    this._items$.next(filteredItems)
  }

  public setFilter(filterBy = this.initialFilter) {
    this._filterBy$.next(filterBy)
    this.query()
  }

  public shouldBuyItem(itemId: string) {
    return this.http.get<{ answer: string }>('https://yesno.wtf/api')
      .pipe(map(res => res.answer))
  }

  public async remove(itemId: string) {
    try {
      await storageService.remove(ENTITY, itemId)
      const items = this._items$.getValue()
      const itemIdx = items.findIndex(item => item.id === itemId)
      if (itemIdx === -1) throw Error('No item found')
      items.splice(itemIdx, 1)
      this._items$.next(items);
    } catch (err) {
      console.log('Could not remove item', itemId, err);
    }
  }

  public getById(itemId: string) {
    return from(storageService.get(ENTITY, itemId) as Promise<Item>)
  }

  public save(item: Item): Observable<Item> {
    const method = (item.id) ? 'put' : 'post'
    const prmSavedItem = storageService[method](ENTITY, item)
    this.setFilter()
    return from(prmSavedItem) as Observable<Item>
  }

  public getEmptyItem() {
    return { name: '', desciption: '', price: null }
  }

  private _filterItems(items: Item[], filterBy) {
    return items.filter((item) => {
      const term = filterBy.term || ''
      const termRegex = new RegExp(term, 'ig')
      const minPrice = filterBy.minPrice || 0
      const maxPrice = filterBy.maxPrice || Number.MAX_SAFE_INTEGER
      return termRegex.test(item.name) && item.price > minPrice && item.price < maxPrice
    })
  }
  private _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  private itemsDB = [
    {
      id: this._makeId(),
      name: 'Green Shoe',
      img: 'https://s7d5.scene7.com/is/image/NB/mtntrrg1_nb_02_i',
      description: 'Dominate the trail in our FuelCore NITREL men\'s trail running shoes. This rugged, but lightweight shoe is off-road ready with an improved AT Tread outsole to help keep you grounded as you explore new paths. The gusseted tongue helps keep out debris, while Toe Protect reinforces the toe tip to help protect the toes. With a combination of speed, traction and performance, these men\'s trail running shoes are ready for your next rugged run.',
      price: 250,
      inStock: true
    },
    {
      id: this._makeId(),
      name: 'Dining Chair ',
      img: 'https://i.ebayimg.com/images/g/9mEAAOSwKnlfSMrb/s-l1600.jpg',
      description: 'Fashion and Simple: Soft moderate thin breathable, anti-wrinkle, suitable for four seasons, bring a new look to your chair Multi Occasions: Spandex fabric chair slipcovers can be used for hotel, wedding, banquet, dinner, meeting, celebration, ceremony, and family dining room decoration etc Excellent Elasticity: Chair slipcovers are made of stretchable material, recovers quickly, secure fit with sewn-in elastic hem, unique stretch fabric conforms to your furnitures contours for a custom-look fit Elegant Home Decoration: These spandex fabric chair slipcovers help you create a clean foundation that complements any decorating style. For Machine wash separately in cold water, gentle cycle.',
      price: 100,
      inStock: false
    },
    {
      id: this._makeId(),
      name: 'Falafel T-Shirt',
      img: 'https://i.ebayimg.com/images/g/snAAAOSw1rJgMJs7/s-l500.jpg',
      description: 'Very high quality smooth print, we do not use cheap iron on transfers. All shirts are fully machine washable. Size chart is in the item gallery pictures.',
      price: 390,
      inStock: true
    },
  ]
}