import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: Item;
  // subscription: Subscription
  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('GOT!');

    this.item = this.route.snapshot.data.item

    // Before Reslover,
    // Subscribe to route params and merge it with the getById Observable, so each time we get a new params we will also get a new item
    // this.subscription = this.route.params.pipe(
    //   mergeMap(params => this.itemService.getById(params.id))
    // ).subscribe(item => {
    //   this.item = item
    // })
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }
}
