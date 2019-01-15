import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {
  text: string;
  position: any;
  placement;
  public toggleTooltip: Subject<any> = new Subject();
  showTooltip(
    text: string,
    position: string,
    placement: string
  ) {
    this.text = text;
    this.position = position;
    this.placement = placement;
    this.toggleTooltip.next('show');
  }
  hideTooltip() {
    this.toggleTooltip.next('hide');
  }

  constructor() {}
}
