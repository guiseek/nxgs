import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-generators',
  templateUrl: './generators.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneratorsComponent {}
