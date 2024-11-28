import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-features-simple';

  count = 0;
  pow = 0;

  update() {
    this.count++;
    this.pow = Math.pow(this.count, 2);
  }
}
