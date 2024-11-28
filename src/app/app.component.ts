import { Component, computed, effect, signal, Signal } from '@angular/core';
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

  count = signal(0);
  pow:Signal<number> = computed(() => {
    return Math.pow(this.count(), 2);
  });

  isAlertShown = false;

  constructor() {
    effect(() => {
      if (this.count() > 5) {
        this.isAlertShown = true;
      }
    })
  }

  update() {
    this.count.set(this.count()+1);

  }
}
