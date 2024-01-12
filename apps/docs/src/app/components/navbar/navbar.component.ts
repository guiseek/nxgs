import {
  OnInit,
  inject,
  Component,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { WINDOW } from '../../shared';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'nxgs-navbar',
  template: `
    <div class="navbar-container">
      <a class="navbar-link" routerLink="/">
        <h1>&commat;nxgs</h1>
      </a>

      <div class="navbar-links">
        <a href="#" class="navbar-link" routerLink="/"> Getting Started </a>

        <a href="#" class="navbar-link" routerLink="/browse-features">
          Browse features
        </a>

        <a
          href="https://github.com/guiseek/nxgs"
          target="_blank"
          class="navbar-link"
        >
        </a>
      </div>
    </div>
  `,
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class NavbarComponent implements OnInit {
  @HostBinding('class.blurred')
  showBlurredNavbar = false;

  window = inject(WINDOW);

  ngOnInit() {
    fromEvent(this.window, 'scroll').subscribe(() => {
      console.log(this.window.scrollY);

      this.showBlurredNavbar = this.window.scrollY > 0;
    });
  }
}
