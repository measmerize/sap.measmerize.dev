import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, OnInit, ViewChild } from '@angular/core';
import { CurrentProductService } from "@spartacus/storefront";
import { Observable } from "rxjs";
import { Product } from "@spartacus/core";

@Component({
  selector: 'measmerize-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  @ViewChild("measmerizeButton") button: ElementRef | undefined;
  // A reference to the product being displayed so that it can be used in the component template.
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  // Add a service that returns an observable of the current product,
  // using the 'CurrentProductService' from Spartacus.
  constructor(private currentProductService: CurrentProductService) { }

  ngAfterViewInit() {
    this.button?.nativeElement && measmerize.button.mount(this.button?.nativeElement)
  }
}
