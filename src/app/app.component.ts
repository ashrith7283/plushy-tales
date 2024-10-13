import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from './shared/side-menu/side-menu.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideMenuComponent,ProductHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plushy-tales';
}
