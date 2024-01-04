import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { Menu } from './menu';

@Component({
  standalone: true,
  selector: 'nxgs-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, MatListModule],
})
export class MenuComponent {
  navigation: Menu[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Generators',
      path: '/generators',
    },
    {
      title: 'Angular',
      path: '/angular',
    },
    {
      title: 'Nest',
      path: '/nest',
    },
    {
      title: 'Angular Generators',
      children: [
        {
          path: 'angular/generators/accordion',
          title: 'CDK Accordion',
        },
        {
          path: 'angular/generators/tree',
          title: 'CDK Tree',
        },
        {
          path: 'angular/generators/dialog',
          title: 'CDK Diaog',
        },
      ],
    },
  ];
}
