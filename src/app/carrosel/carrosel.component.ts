import { Component } from '@angular/core';
import { MainpageComponent } from "../mainpage/mainpage.component";

@Component({
    selector: 'app-carrosel',
    standalone: true,
    templateUrl: './carrosel.component.html',
    styleUrl: './carrosel.component.scss',
    imports: [MainpageComponent]
})
export class CarroselComponent {

}
