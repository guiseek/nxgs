import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { NavbarComponent } from './components';

@Component({
  standalone: true,
  selector: 'nxgs-root',
  imports: [RouterModule, NavbarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  background = 'blue';

  readonly #router = inject(Router);

  ngOnInit() {
    this.#router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case '/':
            this.background = 'purple';
            break;
          case '/getting-started':
            this.background = 'blue';
            break;
        }
      }
    });
  }
}
