import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemDetailsComponent implements OnInit {
  item: Item;
  // subscription: Subscription
  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.item = this.route.snapshot.data.item

    // Before Reslover,
    // Subscribe to route params and merge it with the getById Observable, so each time we get a new params we will also get a new item
    // this.subscription = this.route.params.pipe(
    //   mergeMap(params => this.itemService.getById(params.id))
    // ).subscribe(item => {
    //   this.item = item
    // })
  }
  onRemoveItem() {
    this.itemService.remove(this.item.id).then(() => this.router.navigateByUrl('/'))
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe()
  // }
}
