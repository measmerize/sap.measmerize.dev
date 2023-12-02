import { Component } from '@angular/core';
import { CurrentProductService } from "@spartacus/storefront";
import { Observable } from "rxjs";
import { Product } from "@spartacus/core";

@Component({
  selector: 'measmerize-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent {
  // A reference to the product being displayed so that it can be used in the component template.
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  // Add a service that returns an observable of the current product,
  // using the 'CurrentProductService' from Spartacus.
  constructor(private currentProductService: CurrentProductService) { }
}
