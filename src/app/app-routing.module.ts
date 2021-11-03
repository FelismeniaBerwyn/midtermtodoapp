import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'folder/Inbox',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () =>
  //     import('./folder/folder.module').then((m) => m.FolderPageModule),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./components/signup/signup.module').then(
        (m) => m.SignupPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'create',
    loadChildren: () => import('./components/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'profile-modal',
    loadChildren: () => import('./components/profile-modal/profile-modal.module').then( m => m.ProfileModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
