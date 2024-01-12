import { FadeInContainerDirective, FadeInDirective } from '../../directives';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  SegmentComponent,
  SnippetComponent,
  TerminalComponent,
} from '../../components';

@Component({
  selector: 'nxgs-get-started',
  standalone: true,
  imports: [
    NgIf,
    TerminalComponent,
    SnippetComponent,
    FadeInContainerDirective,
    FadeInDirective,
    SegmentComponent,
  ],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
})
export class GetStartedComponent {
  selectedIndex = 0;

  year = new Date().getFullYear();
}
