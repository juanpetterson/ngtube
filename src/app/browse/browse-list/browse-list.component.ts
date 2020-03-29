import { Component, OnInit, Input } from '@angular/core';
import { BrowseItem } from '../browse-item/browse-item.model';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {
  constructor() {}
  @Input() browseItems: BrowseItem[];
  @Input() listTitle: string;
  @Input() horizontalLayout = true;

  ngOnInit(): void {}
}
