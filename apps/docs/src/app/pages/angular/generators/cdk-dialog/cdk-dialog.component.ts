import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-cdk-dialog',
  templateUrl: './cdk-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkDialogComponent {}
