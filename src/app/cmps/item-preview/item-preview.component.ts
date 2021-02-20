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
  @Output() onBuyItem = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }


}
