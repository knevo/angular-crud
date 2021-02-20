import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-app',
  templateUrl: './item-app.component.html',
  styleUrls: ['./item-app.component.scss']
})
export class ItemAppComponent implements OnInit {
  constructor(private itemService: ItemService) { }
  items$

  ngOnInit(): void {
    this.items$ = this.itemService.items$
    this.itemService.query()
  }
  onRemoveItem(itemId: string) {
    this.itemService.remove(itemId)
  }
}
