import {
  QueryList,
  Directive,
  AfterContentInit,
  ContentChildren,
} from '@angular/core';
import { FadeInDirective } from './fade-in.directive';

@Directive({
  standalone: true,
  selector: '[nxgsFadeInContainer]',
})
export class FadeInContainerDirective implements AfterContentInit {
  @ContentChildren(FadeInDirective)
  fadeInDirectives?: QueryList<FadeInDirective>;

  ngAfterContentInit() {
    this.fadeInDirectives?.forEach((directive, index) => {
      directive.delay = (index + 1) * 250;
    });
  }
}
