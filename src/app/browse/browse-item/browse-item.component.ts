import { Component, OnInit, Input } from '@angular/core';
import { BrowseItem } from './browse-item.model';

@Component({
  selector: 'app-browse-item',
  templateUrl: './browse-item.component.html',
  styleUrls: ['./browse-item.component.scss']
})
export class BrowseItemComponent implements OnInit {
  @Input() videoItem: BrowseItem;
  constructor() {}

  ngOnInit(): void {}
}
