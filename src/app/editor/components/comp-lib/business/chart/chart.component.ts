import { Component } from "@angular/core";
import { CustomBasicComponent } from "../../../comp-basic/custom-basic/custom-basic.component";
import { EmitSubService} from "src/app/providers/emit-sub.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent extends CustomBasicComponent  {
  chartOption: any;
  constructor(
    private eventService: EmitSubService,
  ) {
    super(eventService)
  }

  ngOnInit() {
    this.initBasicData();
    this.initData();
  }

  initData() {
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    }
  }


}
