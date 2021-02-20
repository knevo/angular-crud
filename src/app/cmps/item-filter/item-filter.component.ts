import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss']
})
export class ItemFilterComponent implements OnInit {

  @Output() onFilter = new EventEmitter()

  constructor(private itemService: ItemService) { }

  filterBy = { term: '', minPrice: null, maxPrice: null };
  subscription: Subscription

  onSetFilter() {
    this.itemService.setFilter(this.filterBy)
  }

  ngOnInit(): void {
    this.subscription = this.itemService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
