import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() placement = 'top';
  @Input() tooltipText = 'DEMO TEST';
  @HostListener('mouseenter', ['$event']) mouseenter(event) {
    this.tooltipService.showTooltip(
      this.tooltipText,
      this.element.nativeElement.getBoundingClientRect(),
      this.placement
    );
  }
  @HostListener('mouseout') mouseout() {
    this.tooltipService.hideTooltip();
  }

  constructor(
    private element: ElementRef,
    private tooltipService: TooltipService
  ) {}
}
