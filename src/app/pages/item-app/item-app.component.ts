import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-app',
  templateUrl: './item-app.component.html',
  styleUrls: ['./item-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemAppComponent implements OnInit {
  constructor(private itemService: ItemService) { }

  items$
  filterBy$

  ngOnInit(): void {
    this.items$ = this.itemService.items$
    this.filterBy$ = this.itemService.filterBy$
    this.itemService.query()
  }
  onSetFilter(filterBy) {
    this.itemService.setFilter(filterBy)
  }
  onBuyItem(itemId) {
    this.itemService.shouldBuyItem(itemId)
  }
}
