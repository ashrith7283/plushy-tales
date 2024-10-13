import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';



@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  sidebarVisible: boolean = false;
}
