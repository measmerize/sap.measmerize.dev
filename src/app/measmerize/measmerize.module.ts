import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay/overlay.component';
import { CmsConfig, ConfigModule } from "@spartacus/core";
import { AddToCartModule } from "@spartacus/cart/base/components/add-to-cart";
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    OverlayComponent,
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductAddToCartComponent: {
          component: OverlayComponent
        }
      }
    } as CmsConfig),
    AddToCartModule
  ]
})
export class MeasmerizeModule { }
