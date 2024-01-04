import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-angular',
  templateUrl: './angular.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent {}
