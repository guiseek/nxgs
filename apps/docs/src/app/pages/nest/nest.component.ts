import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-nest',
  templateUrl: './nest.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestComponent {}
