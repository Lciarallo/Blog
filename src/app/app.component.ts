
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarroselComponent } from "./carrosel/carrosel.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CarroselComponent,FormsModule]
})
export class AppComponent {
  title = 'Blog';
}
