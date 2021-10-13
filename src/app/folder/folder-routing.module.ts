import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HomePage } from '../components/home/home.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FolderPage,
  // },
  {
    path: '/home',
    component: HomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
