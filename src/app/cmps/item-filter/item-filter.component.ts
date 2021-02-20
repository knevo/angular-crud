import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemFilterComponent implements OnInit {
  @Input() filterBy$
  @Output('onSetFilter') onFilter = new EventEmitter()

  constructor() { }

  filterBy = { term: '', minPrice: null, maxPrice: null };
  subscription: Subscription

  onSetFilter() {
    this.onFilter.emit(this.filterBy)
  }

  ngOnInit(): void {
    this.subscription = this.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
