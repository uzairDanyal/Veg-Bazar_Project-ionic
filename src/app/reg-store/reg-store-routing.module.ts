import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegStorePage } from './reg-store.page';

const routes: Routes = [
  {
    path: '',
    component: RegStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegStorePageRoutingModule {}
