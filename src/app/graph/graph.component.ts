import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data/services/data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  trace$: Observable<any> = of({x: [], y: [], });
  layout = {
    title: 'Intensity vs Time',
    xaxis: {
      title: 'Time (s)'
    },
    yaxis: {
      title: 'Intensity (A)',
      range: [4, 7],
    }
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.trace$ = this.dataService.connect();
  }
}
