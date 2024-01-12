import {
  Input,
  signal,
  Output,
  QueryList,
  Component,
  ElementRef,
  EventEmitter,
  ViewChildren,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'nxgs-segment',
  template: `
    <span
      #option
      *ngFor="let option of options; let index = index"
      class="segment-option"
      (click)="select(index)"
    >
      {{ option }}
    </span>

    <div
      class="segment-highlight"
      [style.left.px]="active().offsetLeft"
      [style.width.px]="active().offsetWidth"
    ></div>
  `,
  styleUrl: './segment.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SegmentComponent implements AfterViewInit {
  @Input() selectedIndex = 0;

  @Input() options: string[] = [];

  @Output() readonly selectedIndexChange = new EventEmitter<number>();

  @ViewChildren('option') optionsElements?: QueryList<ElementRef<HTMLElement>>;

  active = signal<Partial<HTMLElement>>({});

  get activeOption() {
    return this.optionsElements?.toArray()[this.selectedIndex];
  }

  ngAfterViewInit() {
    if (this.activeOption) {
      this.select(0);
    }
  }

  select(index: number) {
    this.selectedIndex = index;
    this.selectedIndexChange.emit(index);

    if (this.activeOption) {
      this.active.set(this.activeOption.nativeElement);
    }
  }
}
