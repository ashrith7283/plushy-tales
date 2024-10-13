import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export class ProductHomeComponent {

}
