import { Route } from '@angular/router';
import {
  NestComponent,
  AngularComponent,
  GeneratorsComponent,
  CdkAccordionComponent,
  CdkDialogComponent,
  CdkTreeComponent,
  GetStartedComponent,
} from './pages';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Get Started',
    component: GetStartedComponent,
  },
  {
    path: 'browse-features',
    title: 'Home',
    component: GetStartedComponent,
  },
  {
    path: 'angular',
    title: 'Angular',
    component: AngularComponent,
  },
  {
    path: 'nest',
    title: 'Nest',
    component: NestComponent,
  },
  {
    path: 'generators',
    title: 'Angular Generators',
    component: GeneratorsComponent,
  },
  {
    path: 'angular/generators/accordion',
    title: 'CDK Accordion',
    component: CdkAccordionComponent,
  },
  {
    path: 'angular/generators/tree',
    title: 'CDK Tree',
    component: CdkTreeComponent,
  },
  {
    path: 'angular/generators/dialog',
    title: 'CDK Diaog',
    component: CdkDialogComponent,
  },
];
