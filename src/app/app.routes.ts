import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'search-form',
    loadComponent: () => import('./components/_inc/Film/search-form/search-form.page').then(m => m.SearchFormPage)
  },
  {
    path: 'demo-alert',
    loadComponent: () => import('./components/pages/demo-alert/demo-alert.page').then(m => m.DemoAlertPage)
  },
  {
    path: 'demo-toast',
    loadComponent: () => import('./components/pages/demo-toast/demo-toast.page').then(m => m.DemoToastPage)
  },
  {
    path: 'demo-api',
    loadComponent: () => import('./components/pages/demo-api/demo-api.page').then(m => m.DemoAPIPage)
  },
];
