import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  item: Item;
  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.item = data.item || this.itemService.getEmptyItem()
    })
  }

  onSaveItem(itemToSave: Item) {
    this.itemService.save({ ...this.item, ...itemToSave }).toPromise()
      .then(() => this.router.navigateByUrl('/'))
  }

}
