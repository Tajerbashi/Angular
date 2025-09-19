import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRipple]',
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.createRipple(event);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.createRipple(event);
  }

  private createRipple(event: MouseEvent): void {
    const button = this.el.nativeElement;
    
    // Remove any existing ripple effect
    const existingRipple = button.querySelector('.ripple');
    if (existingRipple) {
      this.renderer.removeChild(button, existingRipple);
    }

    // Create ripple element
    const circle = this.renderer.createElement('span');
    this.renderer.addClass(circle, 'ripple');
    
    // Calculate dimensions and position
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;
    
    // Set styles for the ripple
    this.renderer.setStyle(circle, 'width', `${diameter}px`);
    this.renderer.setStyle(circle, 'height', `${diameter}px`);
    this.renderer.setStyle(circle, 'left', `${x}px`);
    this.renderer.setStyle(circle, 'top', `${y}px`);
    
    // Append ripple to button
    this.renderer.appendChild(button, circle);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
      if (circle.parentNode === button) {
        this.renderer.removeChild(button, circle);
      }
    }, 600);
  }
}
