import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPreviewComponent implements OnInit {
  @Input() item: Item;
  @Output() onRemoveItem = new EventEmitter<string>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  removeItem(ev: MouseEvent | TouchEvent) {
    ev.stopPropagation()
    this.onRemoveItem.emit(this.item.id)
  }

  editItem(ev: MouseEvent | TouchEvent) {
    ev.stopPropagation()
    this.router.navigate(['edit', this.item.id])
  }
}
