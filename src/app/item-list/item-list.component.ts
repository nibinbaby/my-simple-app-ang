import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  url: string = environment.BASE_URL;
  items: any ;
  constructor( public listservice: ListingService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(){
    this.listservice.getItems()
        .subscribe(items => this.items = items);
  }

}
