import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-snippet',
  template: `
    <div class="snippet-titlebar">
      <div class="traffic-lights">
        <div class="traffic-light"></div>
        <div class="traffic-light"></div>
        <div class="traffic-light"></div>
      </div>

      <div class="snippet-title">Editor</div>
    </div>

    <div class="snippet-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './snippet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnippetComponent {}
