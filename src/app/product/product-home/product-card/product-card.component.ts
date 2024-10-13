import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared/shared.module';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

}
