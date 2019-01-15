import { Component, OnInit } from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  styleObj = { top: '0px', left: '0px' };
  text = 'tooltip text';
  show = false;
  placement = 'top';
  constructor(private tooltipService: TooltipService) {}

  ngOnInit() {
    this.tooltipService.toggleTooltip.subscribe(action => {
      if (action === 'show') {
        this.show = true;
        this.text = this.tooltipService.text;
        const { top, left, width} = this.tooltipService.position;
        this.styleObj.top = top + 'px';
        this.styleObj.left = width / 2 + left + 'px';
        this.placement = this.tooltipService.placement;
      } else {
        // this.show = false;
      }
    });
  }
}
