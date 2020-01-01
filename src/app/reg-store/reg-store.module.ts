import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegStorePageRoutingModule } from './reg-store-routing.module';

import { RegStorePage } from './reg-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegStorePageRoutingModule
  ],
  declarations: [RegStorePage]
})
export class RegStorePageModule {}
