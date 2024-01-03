import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'nxgs-cdk-accordion',
  templateUrl: './cdk-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdkAccordionComponent {}
