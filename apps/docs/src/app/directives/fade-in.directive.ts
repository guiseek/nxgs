import { Directive, ElementRef, HostBinding, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[nxgsFadeIn]',
})
export class FadeInDirective {
  #el = inject<ElementRef<HTMLElement>>(ElementRef);

  getAttr<K extends keyof HTMLElement>(key: K) {
    return this.#el.nativeElement[key];
  }

  @HostBinding('style.animation-delay.ms')
  delay = 0;

  @HostBinding('attr.class')
  get hostClass() {
    return this.getAttr('classList').value + ` fade-in`;
  }
}
