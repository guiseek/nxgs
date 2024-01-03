import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-cdk-tree',
  templateUrl: './cdk-tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkTreeComponent {}
