import { Injectable } from '@angular/core';
import { Observable, interval, of, timer } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private x: number[] = [];
  private y0: number[] = [];
  private y1: number[] = [];
  private y2: number[] = [];
  private y3: number[] = [];
  private y4: number[] = [];
  private y5: number[] = [];
  private y6: number[] = [];
  private y7: number[] = [];
  private iter = 0;

  data$: Observable<{x: number[], y:number[], type: string, mode: string}[] | null> = of(null);
  fluctuation = 5;


  constructor() {}

  connect() {
    // Connect to a websocket that regularly pushes data. 
    // Reformat to x/y data to plot.
    this.data$ = timer(0, 500)
      .pipe(
        map(() => {
          // We will show the 20 most recent values
          this.x.push(this.iter); 
          this.iter = this.iter + 1;
          console.log('this.iter', this.iter)
          this.y0.push(Math.random() + this.fluctuation); // Random data
          this.y1.push(Math.random() + this.fluctuation); // Random data
          this.y2.push(Math.random() + this.fluctuation); // Random data
          this.y3.push(Math.random() + this.fluctuation); // Random data
          this.y4.push(Math.random() + this.fluctuation); // Random data
          this.y5.push(Math.random() + this.fluctuation); // Random data
          this.y6.push(Math.random() + this.fluctuation); // Random data
          this.y7.push(Math.random() + this.fluctuation); // Random data
          if (this.x.length > 20) {
            this.x = this.x.slice(1, -1);
            this.y0 = this.y0.slice(1, -1);
            this.y1 = this.y1.slice(1, -1);
            this.y2 = this.y2.slice(1, -1);
            this.y3 = this.y3.slice(1, -1);
            this.y4 = this.y4.slice(1, -1);
            this.y5 = this.y5.slice(1, -1);
            this.y6 = this.y6.slice(1, -1);
            this.y7 = this.y7.slice(1, -1);
            console.log('this.x', this.x)
            console.log('this.y0', this.y0)
          }
          return [
            {x: this.x, y: this.y0, type: 'scatter', mode: 'lines+markers'}, 
            {x: this.x, y: this.y1, type: 'scatter', mode: 'lines+markers'},
            {x: this.x, y: this.y2, type: 'scatter', mode: 'lines+markers'},
            {x: this.x, y: this.y3, type: 'scatter', mode: 'lines+markers'},
            {x: this.x, y: this.y4, type: 'scatter', mode: 'lines+markers'},
            {x: this.x, y: this.y5, type: 'scatter', mode: 'lines+markers'},
            {x: this.x, y: this.y6, type: 'scatter', mode: 'lines+markers'}
          ]
        })
      );

    return this.data$;
  }
}
