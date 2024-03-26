import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarroselComponent } from "./carrosel/carrosel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CarroselComponent]
})
export class AppComponent {
  title = 'Blog';
}
