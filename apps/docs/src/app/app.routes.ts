import { Route } from '@angular/router';
import { HomeComponent } from './pages/home';
import {
  CdkAccordionComponent,
  CdkDialogComponent,
  CdkTreeComponent,
  GeneratorsComponent,
} from './pages/angular';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angular/generators',
    component: GeneratorsComponent,
    children: [
      {
        path: 'accordion',
        component: CdkAccordionComponent,
      },
      {
        path: 'tree',
        component: CdkTreeComponent,
      },
      {
        path: 'dialog',
        component: CdkDialogComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'accordion',
      },
    ],
  },
  {
    path: 'angular',
    redirectTo: 'angular/generators',
  },
];
