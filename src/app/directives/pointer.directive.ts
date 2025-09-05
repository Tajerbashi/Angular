import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPointer]',
  standalone: true,
})
export class PointerDirective {
  @Input() cursorStyle = 'pointer'; // Use different name for input
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.pointer(this.cursorStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.pointer('');
  }

  private pointer(style: string) {
    this.el.nativeElement.style.cursor = style; // Fixed typo: 'cursor' not 'curser'
  }
}
