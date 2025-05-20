import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'assets' },
  { path: 'assets',
    loadChildren: () => import ('./assets/assets.module').then(m => m.AssetsModule)
  }
];
